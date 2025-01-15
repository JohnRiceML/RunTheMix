import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { GamepadIcon as GameController, Utensils, Car, Calendar, Snowflake } from 'lucide-react'
  
  export default function Faqs() {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Everything You Need to Know</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <GameController className="w-5 h-5" />
                  What games are played?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We play a variety of games, including popular fighting games, party games, and classic multiplayer titles. The game selection often rotates, so there&apos;s always something new to try!
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  What&apos;s the food and drink policy?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                GameZenter offers a delicious menu including burgers, paninis, and a selection of beers. Outside food and drinks are not allowed, but you&apos;re welcome to enjoy our tasty offerings while you play!
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  What are the parking details?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We have a dedicated parking lot available for our guests. During peak hours or special events, additional street parking may be available in the surrounding area. Please observe all posted parking signs and regulations.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <GameController className="w-5 h-5" />
                  Do I need to bring my own controller or console?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We provide all necessary gaming equipment, including consoles and controllers. However, if you have a preferred controller, you&apos;re welcome to bring it. Just make sure it&apos;s compatible with our systems!
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  How often are events held?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We&apos;re here almost every Wednesday – check our Discord server for the most up-to-date schedule and any changes. We occasionally host special events on other days of the week, so stay tuned for announcements!
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <Snowflake className="w-5 h-5" />
                  How do Minnesota winters affect events?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We do our best to maintain our regular schedule during winter months. However, in cases of severe weather or dangerous road conditions, we may postpone or cancel events for everyone&apos;s safety. Always check our Discord or social media for the latest updates during inclement weather.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-7">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Are there any special events during major Minnesota happenings?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We often organize themed events around major local happenings like the Minnesota State Fair, Vikings game days, or the St. Paul Winter Carnival. Keep an eye on our event calendar for these special occasions!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    )
  }
  
  