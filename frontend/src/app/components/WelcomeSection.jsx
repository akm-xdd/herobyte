'use client'

import React, { useState, useEffect } from "react";
import Link from 'next/link';

function WelcomeSection() {
    const [quote, setQuote] = useState("");
    const [quotes, setQuotes] = useState([

        {
            quote: "Take a gamble that love exists, and do a loving act.",
            quoter: "Sister Calderon (RDR2)"
        },
        {
            quote: "The Cake Is A Lie",
            quoter: "Rattmann (Portal)"
        },
        {
            quote: "It's A Me, Mario!",
            quoter: "Mario"
        },
        {
            quote: "Did I Ever Tell You The Definition Of Insanity?",
            quoter: "Vaas Montenegro (Far Cry 3)"
        },
        {
            quote: "All We Had To Do, Was Follow The Damn Train, CJ!",
            quoter: "Big Smoke (GTA San Andreas)"
        },
        {
            quote: "I Don't Need A Weapon; My Friends Are My Power!",
            quoter: "Sora (Kingdom Hearts)"
        },
        {
            quote: "Stand amongst the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.",
            quoter: "Javik (Mass Effect 3)"
        },
        {
            quote: "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.",
            quoter: "Pandora (God Of War 3)"
        },
        {
            quote: "Don’t be sorry, be better.",
            quoter: "Kratos (God Of War 4)"
        },
        {
            quote: "If you find yourself in a hole, the first thing to do is stop digging.",
            quoter: "John Marston (RDR1)"
        },
        {
            quote: "War is when the young and stupid are tricked by the old and bitter into killing each other.",
            quoter: "Niko Bellic (GTA IV)"
        },
        {
            quote: "Too many people have opinions on things they know nothing about. And the more ignorant they are, the more opinions they have.",
            quoter: "Thomas Hildern (Fallout New Vegas)"
        },
        {
            quote: "It's a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.",
            quoter: "Emily Kaldwin (Dishonored 2)"
        },
        {
            quote: "Courage need not be remembered, for it is never forgotten.",
            quoter: "Princess Zelda (The Legend Of Zelda: Breath Of The Wild)"
        },
        {
            quote: "Part of growing up is doing what's best for the people you care about, even if sometimes, that means hurting someone else.",
            quoter: "Lee Everett (The Walking Dead)"
        },
        {
            quote: "The right man in the wrong place can make all the difference in the world.",
            quoter: "G-Man (Half-Life 2)"
        },
        {
            quote: "Wanting something does not give you the right to have it.",
            quoter: "Ezio Auditore (Assassin's Creed 2)"
        },
        {
            quote: "War. War never changes. But men do, through the roads they walk.",
            quoter: "The Narrator (Fallout Series)"
        },
        {
            quote: "This is somewhere to be. This is all you have, but it's still something. Streets and sodium lights. The sky, the world. You're still alive.",
            quoter: "Volition (Disco Elysium)"
        },
        {
            quote: "In the dark times, should the stars also go out?",
            quoter: "Steban (Disco Elysium)"
        },
        {
            quote: "The first death is in the heart, Harry.",
            quoter: "Dolores Dei (Disco Elysium)"
        },
        {
            quote: "The sun sets into the sea, but the water does not boil. Instead it turns to liquid gold. For a moment, the world's store of precious metals seems to increase dramatically, and you are rich...",
            quoter: "Apricot Chewing Gum Wrapper (Disco Elysium)"
        },
        {
            quote: "People are beautiful. Statuesque. Parodies and tragedies of themselves. A great democracy of creatures...",
            quoter: "Perception (Disco Elysium)"
        },
        {
            quote: "See? Everyone finds something worth holding onto in this world.",
            quoter: "Joyce Messier (Disco Elysium)"
        },
        {
            quote: "It's always a challenge to describe the person you know the best in the world.",
            quoter: "Empathy (Disco Elysium)"
        }
        // Add more quotes and quoters as needed
        // ... your list of quotes here ...
    ]);

    useEffect(() => {
        generateRandomQuote();
    }, []);

    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div className="bg-gray-800 flex items-center h-screen mt-4">
            <div className="max-w-7xl mt-6 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    <h2 className="text-6xl font-primary mb-4">
                        Welcome! <br /> <span className="text-3xl "> Let&apos;s slap you with some gaming quotes before you get started.</span>
                    </h2>
                    <h3 className="text-4xl font-secondary text-[#EFB7D3] mb-8">
                        &quot;{quote.quote}&quot;
                    </h3>
                    <p className="mb-6 font-secondary text-[#B2B2B2] text-2xl">
                        - {quote.quoter}
                    </p>
                    <div className="flex flex-col gap-4 items-center">
                        <Link href="/blog"
                            className="bg-blue-500 font-secondary hover:bg-blue-400 text-white font-bold py-2 px-4  hover:border-blue-500 rounded
                            select-none
                            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                            active:border-b-[0px]
                            transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                                border-b-[1px] border-blue-400">
                            Explore
                        </Link>
                        <button
                            onClick={generateRandomQuote}
                            className="bg-green-500 font-secondary hover:bg-green-400 text-white font-bold py-2 px-4  hover:border-green-500 rounded
                            select-none
                            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                            active:border-b-[0px]
                            transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                                border-b-[1px] border-green-400">
                            Refresh
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;
