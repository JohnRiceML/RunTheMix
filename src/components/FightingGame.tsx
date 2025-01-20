"use client";

import React, { useState, useEffect } from "react";

/**
 * Types & Constants
 */
type PlayerAction = "idle" | "move" | "attack" | "block" | "jump" | "special";

type PlayerState = {
    position: number;        // Horizontal position, 0 to 100
    action: PlayerAction;    // Current action (idle, attack, etc.)
    health: number;          // Health, 0 - 100
    frameTimer: number;      // Tracks how long an action plays
    isTakingDamage: boolean; // True if recently took damage (for animation)
    specialCooldown: boolean;// True if special is on cooldown
    jumpCount: number;       // Double-jump tracker (0-2)
    facingLeft: boolean;
};

type Difficulty = "easy" | "normal" | "hard";

const initialState: PlayerState = {
    position: 5,
    action: "idle",
    health: 100,
    frameTimer: 0,
    isTakingDamage: false,
    specialCooldown: false,
    jumpCount: 0,
    facingLeft: false
};

// Attack frame data (startup, active, recovery)
const attackFrameData = {
    startup: 5,  // frames
    active: 3,
    recovery: 7,
};

const FightingGame: React.FC = () => {
    /**
     * States
     */
    const [player1, setPlayer1] = useState<PlayerState>({ ...initialState });
    const [player2, setPlayer2] = useState<PlayerState>({
        ...initialState,
        position: 80, // CPU starts further to the right
        facingLeft: true
    });

    // CPU faces the player
    useEffect(() => {
        setPlayer2((prev) => ({
            ...prev,
            facingLeft: player1.position < prev.position,
        }));
    }, [player1.position]);

    const [specialAttackPopup, setSpecialAttackPopup] = useState<{
        player: "player1" | "player2" | null;
        visible: boolean;
    }>({ player: null, visible: false });


    // Game flow: countdown -> active -> winner
    const [countdown, setCountdown] = useState<number>(4);
    const [isGameActive, setIsGameActive] = useState(false);
    const [winner, setWinner] = useState<"player1" | "player2" | null>(null);

    // Extra: CPU difficulty
    const [cpuDifficulty, setCpuDifficulty] = useState<Difficulty>("hard");

    // Helper to clamp a value between min and max
    const clamp = (value: number, min: number, max: number) =>
        Math.max(min, Math.min(value, max));

    /**
     * Pre-fight countdown
     */
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsGameActive(true); // Let players move once countdown hits 0
        }
    }, [countdown]);

    /**
     * Reset game
     */
    const resetGame = () => {
        setPlayer1({ ...initialState, position: 5 });
        setPlayer2({ ...initialState, position: 85 });
        setCountdown(4);
        setWinner(null);
        setIsGameActive(false);
    };

    /**
     * Creates a CSS className based on the player's state
     * for the relevant animations.
     */
    const getPlayerClassName = (player: PlayerState) => {
        let classNames = "player transition-transform";

        switch (player.action) {
            case "attack":
                classNames += " attack-animation";
                break;
            case "jump":
                classNames += " jump-animation";
                break;
            case "block":
                classNames += " block-animation";
                break;
            case "special":
                classNames += " special-animation";
                break;
            default:
                break;
        }

        if (player.isTakingDamage) {
            classNames += " shake-animation damage-flash";
        }

        return classNames;
    };

    /**
     * Movement controls (for left/right buttons).
     * Allows movement in the air.
     */
    const movePlayer = (
        player: "player1" | "player2",
        direction: "left" | "right"
    ) => {
        if (!isGameActive) return; // do nothing if game not active

        const moveDistance = 8;
        const stateUpdater = player === "player1" ? setPlayer1 : setPlayer2;

        stateUpdater((prev) => {
            const newPos = clamp(
                direction === "left" ? prev.position - moveDistance : prev.position + moveDistance,
                0,
                100
            );
            // If not jumping, set action to move
            const newAction: PlayerAction = prev.action !== "jump" ? "move" : prev.action;
            return { ...prev, position: newPos, action: newAction };
        });

        // Return to idle after 300ms
        setTimeout(() => {
            stateUpdater((prev) => {
                if (prev.action === "move") {
                    return { ...prev, action: "idle" };
                }
                return prev;
            });
        }, 300);
    };

    /**
     * Jumps (including double-jump).
     * Up to 2 jumps in a row.
     */
    const jump = (player: "player1" | "player2") => {
        if (!isGameActive) return;

        const currentState = player === "player1" ? player1 : player2;
        const stateUpdater = player === "player1" ? setPlayer1 : setPlayer2;

        if (currentState.jumpCount >= 2) return;

        const newJumpCount = currentState.jumpCount + 1;
        stateUpdater((prev) => ({
            ...prev,
            action: "jump",
            jumpCount: newJumpCount,
        }));

        const localJumpCount = newJumpCount;
        // Land after 800ms if no further jump is triggered
        setTimeout(() => {
            stateUpdater((prev) => {
                if (prev.jumpCount === localJumpCount) {
                    return { ...prev, action: "idle", jumpCount: 0 };
                }
                return prev;
            });
        }, 800);
    };

    /**
     * Attack
     * - Damages opponent if in range and not blocking
     */
    const attack = (player: "player1" | "player2") => {
        if (!isGameActive) return;

        const stateUpdater = player === "player1" ? setPlayer1 : setPlayer2;
        const opponentUpdater = player === "player1" ? setPlayer2 : setPlayer1;
        const opponent = player === "player1" ? player2 : player1;

        stateUpdater((prev) => ({
            ...prev,
            action: "attack",
            frameTimer: attackFrameData.startup + attackFrameData.active + attackFrameData.recovery,
        }));

        setTimeout(() => {
            // If close enough & opponent not blocking -> damage
            const distance = Math.abs(player1.position - player2.position);
            if (distance <= 10 && opponent.action !== "block") {
                opponentUpdater((oPrev) => ({
                    ...oPrev,
                    health: Math.max(oPrev.health - 10, 0),
                    isTakingDamage: true,
                }));
                setTimeout(() => {
                    opponentUpdater((oPrev) => ({ ...oPrev, isTakingDamage: false }));
                }, 300);
            }
        }, attackFrameData.startup * 100);

        // Return to idle after full duration
        setTimeout(() => {
            stateUpdater((prev) => ({ ...prev, action: "idle" }));
        }, (attackFrameData.startup + attackFrameData.active + attackFrameData.recovery) * 100);
    };

    /**
     * Block
     * - Lasts 1 second
     */
    const block = (player: "player1" | "player2") => {
        if (!isGameActive) return;

        const stateUpdater = player === "player1" ? setPlayer1 : setPlayer2;
        stateUpdater((prev) => ({ ...prev, action: "block" }));

        setTimeout(() => {
            stateUpdater((prev) => ({ ...prev, action: "idle" }));
        }, 1000);
    };

    /**
     * Special Attack
     * - Damages opponent after 1s if not blocking
     * - Puts player on 5s cooldown
     */
    const specialAttack = (player: "player1" | "player2") => {
        if (!isGameActive) return;

        const stateUpdater = player === "player1" ? setPlayer1 : setPlayer2;
        const opponentUpdater = player === "player1" ? setPlayer2 : setPlayer1;
        const opponent = player === "player1" ? player2 : player1;

        const currentState = player === "player1" ? player1 : player2;
        if (currentState.specialCooldown) return; // already on cooldown

        // Enter special state
        stateUpdater((prev) => ({
            ...prev,
            action: "special",
            frameTimer: 30,
            specialCooldown: true,
        }));

        // Damage after 1s if opponent not blocking
        setTimeout(() => {
            if (opponent.action !== "block") {
                opponentUpdater((oPrev) => ({
                    ...oPrev,
                    health: Math.max(oPrev.health - 20, 0),
                    isTakingDamage: true,
                }));
                setTimeout(() => {
                    opponentUpdater((oPrev) => ({ ...oPrev, isTakingDamage: false }));
                }, 300);

                // Trigger the special attack pop-up
                setSpecialAttackPopup({ player, visible: true });

                // Hide the pop-up after 1.5 seconds
                setTimeout(() => {
                    setSpecialAttackPopup({ player: null, visible: false });
                }, 1500);
            }
        }, 1000);

        // Return to idle after 1.5s
        setTimeout(() => {
            stateUpdater((prev) => ({ ...prev, action: "idle" }));
        }, 1500);

        // End cooldown after 5s
        setTimeout(() => {
            stateUpdater((prev) => ({ ...prev, specialCooldown: false }));
        }, 5000);
    };


    /**
     * CPU logic (Player2)
     * - Behavior depends on distance and random probabilities.
     */
    useEffect(() => {
        if (!isGameActive || winner) return;

        // Probability for CPU's special
        // Probability for CPU's special and jump
        const difficultyMap = {
            easy: { special: 0.05, jump: 0.1 },
            normal: { special: 0.1, jump: 0.15 },
            hard: { special: 0.2, jump: 0.15 },
        };
        const { special: specialProb, jump: jumpProb } = difficultyMap[cpuDifficulty];

        const cpuLogic = setInterval(() => {
            const distance = Math.abs(player2.position - player1.position);

            // Defensive check if P1 is attacking
            if (player1.action === "attack" && distance < 15) {
                block("player2");
                return;
            }

            // Chance to jump based on probability
            if (Math.random() < jumpProb) {
                jump("player2");
                return;
            }

            // Chance to do special if off cooldown
            if (!player2.specialCooldown && Math.random() < specialProb) {
                specialAttack("player2");
                return;
            }

            // If far away, move closer
            if (distance > 10) {
                if (player2.position > player1.position) {
                    movePlayer("player2", "left");
                } else {
                    movePlayer("player2", "right");
                }
            } else {
                // Random attack or block
                if (Math.random() < 0.5) {
                    attack("player2");
                } else {
                    block("player2");
                }
            }
        }, 1000);

        return () => clearInterval(cpuLogic);
    }, [isGameActive, winner, cpuDifficulty, player1, player2]);

    /**
     * Check for KO
     */
    useEffect(() => {
        if (player1.health <= 0) {
            setWinner("player2");
            setIsGameActive(false);
        } else if (player2.health <= 0) {
            setWinner("player1");
            setIsGameActive(false);
        }
    }, [player1.health, player2.health]);

    /**
     * Render
     */
    return (
        <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center relative font-sans">
            <style jsx>{`
        /* Jump */
        .jump-animation {
          animation: jump 0.8s ease-in-out forwards;
        }
        @keyframes jump {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-190px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* Attack */
        .attack-animation {
          animation: attack 0.3s ease-in-out;
        }
        @keyframes attack {
          0% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(0) scale(1.2);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }

        /* Block */
        .block-animation {
          animation: block 0.5s ease-in-out infinite alternate;
        }
        @keyframes block {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        /* Special */
        .special-animation {
          box-shadow: 0 0 20px 5px rgba(255, 255, 0, 0.7);
        }

        /* Damage feedback */
        .damage-flash {
          animation: damageFlash 0.3s ease-in-out;
        }
        @keyframes damageFlash {
          0% {
            background-color: rgba(255, 0, 0, 0.5);
          }
          50% {
            background-color: transparent;
          }
          100% {
            background-color: rgba(255, 0, 0, 0.5);
          }
        }

        /* Shake effect */
        .shake-animation {
          animation: shake 0.3s ease-in-out;
        }
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(10px);
          }
          75% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Special beam container */
        .beam-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        .special-beam {
          position: absolute;
          top: 55%;
          height: 40%;
          background-color: #fdf65b;
          opacity: 0.8;
          box-shadow: 0 0 20px rgba(255, 255, 0, 0.8);
          animation: beamExpand 1.5s linear forwards;
        }
        .player1-beam {
          left: 0;
          width: 0;
        }
        .player2-beam {
          right: 0;
          width: 0;
        }
        @keyframes beamExpand {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        /* Fade-in for end-game overlay */
        .fade-in {
          animation: fadeIn 0.6s ease-in forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

            {/* Countdown Overlay */}
            {countdown > 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-6xl font-bold z-20">
                    
                    <div className=" absolute top-10  flex">
                        <img alt="" src={'pete-sp1.png'} style={{ height: '282px', width: '186px' }} />
                    </div>
                    {countdown === 4 && "Pete Accepts!"}
                    {countdown === 1? "Fight!" : (countdown != 4? countdown: "")}
                   
                </div>
            )}

            {/* End-game Overlay */}
            {winner && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-3xl font-bold z-30 fade-in">
                    <div className="mb-3 text-5xl">Game Over</div>
                    {winner === "player1" ? "You Wrecked Pete! Now rub it in his face at the next weekly" : "Pete Wins! Wait thats not suppose to happen "}
                    <button
                        onClick={resetGame}
                        className="mt-6 bg-white text-black px-4 py-2 rounded hover:opacity-80"
                    >
                        Restart
                    </button>
                </div>
            )}

            {/* Top Controls: CPU Difficulty */}
            <div className="absolute z-0 top-4 flex space-x-4 items-center">
                <label className="text-sm">CPU Difficulty: </label>
                <select
                    value={cpuDifficulty}
                    onChange={(e) => setCpuDifficulty(e.target.value as Difficulty)}
                    className="text-black px-2 py-1 rounded"
                //   disabled={isGameActive} // lock in difficulty once the game starts
                >
                    <option value="easy">Sleepy Pete</option>
                    <option value="normal">Pete Sitting Up</option>
                    <option value="hard">Pete Locked In</option>
                </select>
            </div>

            <div className="flex items-center justify-center w-full  text-white font-sans">
                {/* Player 1 */}
                <div className="flex items-center space-x-2">
                    <div className="text-4xl font-semibold">RTM</div>
                    <img
                        src="logo.jpg"
                        alt="RTM"
                        className="w-12 h-12 rounded-full border-4 border-blue-500"
                    />
                    {/* <div className="text-sm">Power: 69</div> */}
                </div>

                {/* VS Divider */}
                <div className="mx-6 text-6xl font-bold text-red-500">VS</div>

                {/* Player 2 */}
                <div className="flex  items-center space-x-2">
                    <img
                        src="pete.jpg"
                        alt="Pete"
                        className="w-12 h-12 rounded-full border-4 border-red-500"
                    />
                    <div className="text-4xl font-semibold">Pete</div>
                    {/* <div className="text-sm">Power: 420</div> */}
                </div>
            </div>


            {/* Health Bars */}
            <div className="w-3/4 max-w-5xl mb-4 flex justify-between mt-6 space-x-4">
                {/* Player 1 health */}
                <div className="flex-1 bg-gray-700 h-4 rounded overflow-hidden">
                    <div
                        className="bg-blue-500 h-4 transition-all"
                        style={{ width: `${player1.health}%` }}
                    />
                </div>
                {/* Player 2 health */}
                <div className="flex-1 bg-gray-700 h-4 rounded overflow-hidden">
                    <div
                        className="bg-red-600 h-4 transition-all"
                        style={{ width: `${player2.health}%` }}
                    />
                </div>
            </div>

            {/* Fighting Arena */}
            <div
                className="relative w-3/4 max-w-5xl h-1/2 border border-gray-600 overflow-hidden flex items-end justify-center"
                style={{
                    backgroundImage: 'url("/main-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Special Beam container */}
                <div className="beam-container">
                    {player1.action === "special" && <div className="special-beam player1-beam" />}
                    {player2.action === "special" && <div className="special-beam player2-beam" />}
                </div>

                {/* Player 1 */}
                <div
                    className={getPlayerClassName(player1)}
                    style={{
                        left: `${player1.position}%`,
                        bottom: 0,
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "absolute",
                        transform: "translateX(-10%)",
                    }}
                >
                    {/* Visual indicator: if special is on cooldown, show a small label */}
                    {player1.specialCooldown && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-xs px-2 py-1 rounded">
                            Cooldown
                        </div>
                    )}
                    <img
                        src="/rtm-logo.png"
                        alt="Player 1"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

                {/* Player 2 */}
                <div
                    className={getPlayerClassName(player2)}
                    style={{
                        left: `${player2.position}%`,
                        bottom: 0,
                        width: "150px",
                        height: "230px",
                        borderRadius: "20%",
                        overflow: "hidden",
                        position: "absolute",
                        transform: player2.facingLeft ? "scaleX(1)" : "scaleX(-1)",
                    }}
                >
                    {/* Visual indicator: if special is on cooldown, show a small label */}
                    {player2.specialCooldown && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-xs px-2 py-1 rounded">
                            Cooldown
                        </div>
                    )}
                    <img
                        src="/pete-sp2.png"
                        alt="CPU"
                        style={{ width: "100%", height: "100%", }}

                    />
                </div>
            </div>

            {specialAttackPopup.visible && (
                <div
                    className={`absolute bg-transparent ${specialAttackPopup.player === "player1" ? "left-25" : "right-20"
                        } top-20 z-50`}
                >
                    <img
                        src={
                            specialAttackPopup.player === "player1"
                                ? "/shia2.png"
                                : "/shia1.png"
                        }
                        alt="Special Attack"
                        className="w-42 h-62 mix-blend-normal"
                    />
                </div>

            )}

            {/* Player 1 Controls (buttons) */}
            {isGameActive && !winner && (
                <div className="flex mt-8 space-x-8">
                    <div className="flex flex-col items-center">
                        {/* <h3 className="mb-2 font-semibold text-xl">Player 1</h3> */}
                        <div className="flex space-x-2 mb-2">
                            <button
                                onClick={() => movePlayer("player1", "left")}
                                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                            >
                                Left
                            </button>
                            <button
                                onClick={() => movePlayer("player1", "right")}
                                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                            >
                                Right
                            </button>
                            <button
                                onClick={() => jump("player1")}
                                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                            >
                                Jump
                            </button>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => attack("player1")}
                                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                            >
                                Attack
                            </button>
                            <button
                                onClick={() => block("player1")}
                                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                            >
                                Block
                            </button>
                            <button
                                onClick={() => specialAttack("player1")}
                                className={`${player1.specialCooldown
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-purple-600 hover:bg-purple-700"
                                    } text-white px-4 py-2 rounded`}
                                disabled={player1.specialCooldown}
                            >
                                Special
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FightingGame;
