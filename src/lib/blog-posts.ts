export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

export const allPosts: BlogPost[] = [
  {
    id: "1",
    title: "The buka is not just a restaurant. It's where Nigeria eats.",
    excerpt:
      "There is no word in the English language that fully captures what a buka is.",
    content: `
      <p>There is no word in the English language that fully captures what a buka is. "Canteen" is too institutional. "Diner" is too American. "Restaurant" is far too formal for a place where you might share a bench with a senator and a bricklayer at the same time, both eating the same plate of Amala.</p>

      <p>The buka is something else entirely. It is a social institution. It is the thread that stitches together a neighbourhood, a market, an office district. It is the place where deals are made, friendships are formed, and the best food in any city is quietly served without ceremony or menu boards - because everyone already knows what they want.</p>

      <blockquote>"The buka doesn't advertise. It doesn't need to. The food advertises itself - through smell, through word of mouth, through the queue that forms before 11am."</blockquote>

      <h2>The economics of the buka</h2>
      <p>A typical buka in any Nigerian city feeds between 80 and 300 people a day. It operates on margins that would make a Western restaurateur weep - sometimes NGN 200 per plate, rarely more than NGN 2,000 for a full meal. And yet, many buka owners have sustained their businesses for decades, educated their children, and built property - all on the strength of consistency, reputation, and a fiercely loyal customer base.</p>

      <p>What makes the buka work is not the price. It is the trust. When you eat at Mama Something's place three times a week, you are not choosing a restaurant. You are choosing a relationship. You know the oil is fresh. You know the crayfish is real. You know that when she says "the Egusi is good today," she means it personally.</p>

      <h2>Why ChopQik was built around this</h2>
      <p>When we started ChopQik, we didn't want to build another app for fancy restaurants with professional photographs and English-only menus. We wanted to build the thing that the buka deserved - technology that keeps the trust intact while removing the chaos of managing a rush-hour queue with nothing but a notebook and memory.</p>

      <p>The buka is not a problem to be disrupted. It is an institution to be supported. That's the difference, and it's everything.</p>
    `,
    category: "Food Culture",
    date: "March 2025",
    image: "/images/keesha-s-kitchen-jvFeJhQ6Xsk-unsplash.jpg",
    readTime: "8 min read",
    author: {
      name: "ChopQik Team",
      role: "Editorial",
      avatar: "C",
    },
  },
  {
    id: "2",
    title:
      "The woman who feeds 100 people before noon and never writes a single order down",
    excerpt:
      "Madam Stopover starts before sunrise and runs two parallel businesses with no system connecting them.",
    content: `
      <p>Madam Stopover's day starts at 5am. Not because an alarm tells her to - she has been waking at this time for years and her body has simply stopped needing one. By 5:30 she has the fire lit, the palm oil warming, and the first pot of stock on. By 7am, the smell has started its journey down the street. By 7:30am, the first customers are already at Ofejiro Stopover Resturant.</p>

      <p>She knows many of them as the business has been there for over 20 years. She knows who likes extra pepper. She knows who is trying to eat less oil for health reasons. She knows who always orders for two even when they are alone, because they are taking food home to their mother. This is not hospitality training. This is years of caring - the kind you cannot teach and cannot fake.</p>

      <blockquote>"I don't write anything down because it's all here," she says, pressing one finger to her temple. "But sometimes I worry. What if I forget? What if it gets too busy?"</blockquote>

      <h2>When the rush hits</h2>
      <p>Between 12pm and 3pm, Ofejiro Stopover becomes a different place entirely. Every table is taken. New customers are walking in while others are still eating. Orders are coming from every direction. And in the middle of all of it, Madam Stopover is trying to hold an entire restaurant in her head at once.</p>

      <p>Here is how it works on a normal busy day. A customer sits down. One of her salesgirls takes the order, writes the items and the amount on a small piece of paper, and walks it across to Madam Stopover, who collects the payment. During a quiet afternoon, this works fine. During rush hour, it becomes something else entirely - slips arriving from two directions at once, some getting wet near the cooking area, some landing on the floor, some arriving after the customer has already eaten and is standing up to leave.</p>

      <p>And then there is the deeper problem. When a salesperson writes NGN 1,500 on a slip, is that the correct price for what was served? Did she remember to add the extra protein? Did she account for the drink? During a rush, honest mistakes happen. But because the slip disappears the moment the payment is collected, there is no way to check. The money in the tin is what it is - and whether it matches what was actually sold, there is no way to know.</p>

      <p>Who ordered the Egusi? Has Table 4 paid? That woman by the window - did she pay before she sat down or is she waiting for the bill? These questions pile up faster than they can be answered. Sometimes change is given incorrectly. Sometimes a table walks out not because they meant to leave without paying, but because in the chaos nobody was sure who was responsible for collecting. It happens. It costs her every time.</p>

      <h2>Two businesses, no system connecting them</h2>
      <p>What makes it harder is that Madam Ofejiro is not running one operation - she is running two simultaneously with nothing connecting them. The customers eating inside the restaurant are one world. The customers who call ahead, send someone to collect, or want food delivered are another world entirely. An order comes in by phone while she is in the middle of serving a full house. She tries to hold it in her head. Sometimes it works. Sometimes the customer arrives to find their food was not prepared because the message got lost somewhere between the phone call and the kitchen.</p>

      <p>It is not carelessness. It is the inevitable result of trying to manage everything with memory, a notebook, and small pieces of paper while also cooking for 300 people.</p>

      <h2>What changed</h2>
      <p>Ofejiro Stopover is the first restaurant partnering with ChopQik - and the reason we built the platform the way we did. When we sat with Madam Stopover and asked what would actually help her, she did not ask for a fancy website. She asked for two things: to stop losing track during the rush, and to finally know her real numbers at the end of the month.</p>

      <p>So that is where we started. Every table now has a small QR card. When a customer sits down, her salesperson no longer writes on paper - she opens the ChopQik screen, taps the items and the table number, and the order appears instantly on Madam Stopover's dashboard. The amount is automatic - no handwriting, no slips, no guessing. Madam sees exactly what was ordered, collects the payment, and taps paid. At any point during the rush she can look at one screen and know which tables have paid, which are still eating, and which orders are being prepared. The chaos does not disappear - but it becomes manageable.</p>

      <p>The outside orders now live in the same place. A customer orders through ChopQik from across town. It joins the same queue on the same screen, labelled clearly as a delivery. One screen. Everything in it.</p>

      <p>The notebook still exists - but now it has a version that works. Every market purchase she logs. Every debt to a supplier she tracks with a reminder before it is due. Every expense she records - the girls' wages, the gas, the equipment. At the end of the month, one screen shows her the number she has been trying to calculate for years: total earned, minus every naira spent, equals her real profit. The first time she saw it clearly laid out, she was quiet for a long moment.</p>

      <blockquote>"So that is what I actually made. All these years and I never knew the real number."</blockquote>

      <p>She still wakes at 5am. She still knows her regulars by their voices and their orders. Her food has not changed - and it never needed to. But now she also knows her numbers, her stock, her debts, and her best-selling dishes. That, she says, feels like finally having a proper business after all these years of running one.</p>

      <p>Ofejiro Stopover is open every day in Benin City. You can find her - and order from her - right here on ChopQik.</p>
    `,
    category: "Vendor Spotlight",
    date: "March 2025",
    image: "/images/keesha-s-kitchen-eaSIzdS8pv0-unsplash.jpg",
    readTime: "6 min read",
    author: {
      name: "ChopQik Team",
      role: "Editorial",
      avatar: "C",
    },
  },
  {
    id: "3",
    title:
      "Why Nigerian street food is the best food in the world - and we're not arguing about it",
    excerpt:
      "Nigerian street food is not a trend. It is a daily living practice that rewards freshness, speed, and honesty.",
    content: `
      <p>You want to explain Nigerian street food to someone who has not experienced it? Start with this: there is a woman somewhere in Benin City right now, standing over a charcoal fire at 11pm, fanning suya that has been marinating since yesterday morning in a spice blend her grandmother gave her. The smell travels forty metres in every direction. There is a small crowd. There is always a small crowd.</p>

      <p>That is Nigerian street food. Not a concept. Not a trend. A daily, living, breathing practice that has been happening in every town and city in this country for generations - and that somehow gets better the less formal it is.</p>

      <blockquote>"The best Jollof I ever tasted was not in a restaurant. It was from a woman on a plastic stool next to a kerosene lamp in Onitsha market. NGN 400. I have been chasing that flavour ever since."</blockquote>

      <h2>What makes it different</h2>
      <p>It is the immediacy. Street food is made fresh, sold fast, and consumed immediately. There is no laminated menu, no table service, no waiting for the bill. You point, you pay, you eat. The transaction is honest and the food is accountable - if it is not good, the vendor knows before you have walked ten paces, because you have not come back tomorrow.</p>

      <p>It is also the range. In a single street in Lagos or Benin or Aba, you can eat Akara from Mama Nkechi, Agege bread from the boy on the bicycle, pepper soup from the woman under the umbrella, and fried plantain from the girl with the pan balanced on her head. You have eaten four different foods from four different kitchens and spent less than NGN 1,500. Try that in any other food culture in the world.</p>

      <h2>What ChopQik is trying to do</h2>
      <p>We are not trying to change Nigerian street food. We would not dare. We are trying to make sure that the woman with the suya can reach a customer who is two streets away and does not know she exists yet. That is all. The food does the rest.</p>
    `,
    category: "Food Culture",
    date: "February 2025",
    image: "/images/abraham-owunna-K5HSd7U8tRo-unsplash.jpg",
    readTime: "6 min read",
    author: {
      name: "Adaeze Okoye",
      role: "Contributor",
      avatar: "A",
    },
  },
  {
    id: "4",
    title:
      "How to eat well in Nigeria for less than NGN 3,000 a day - a real guide",
    excerpt:
      "A practical planning-first approach for eating proper meals daily on a tight budget.",
    content: `
      <p>Let me be direct: this guide is not written by someone who has rediscovered "street food" as a trend. I work in Yaba, I earn an average Lagos salary, and I have been eating properly on a tight budget for three years. These are the actual things I do.</p>

      <h2>Rule 1: Eat breakfast from a buka, not a bakery</h2>
      <p>Agege bread and a cold drink at a bakery will cost you NGN 600 and leave you hungry by 10am. Akara and pap from the woman near the bus stop - NGN 300, and you will not think about food until 1pm. The math is simple. The discipline is the hard part.</p>

      <h2>Rule 2: Pre-order your lunch the night before</h2>
      <p>The most expensive meal of the day is always the impulsive one. When you are hungry at 1pm and you have not thought about food, you end up at the nearest place, which is rarely the best value. Pre-ordering on ChopQik the evening before means you have already made the sensible decision before hunger makes decisions for you. A full plate of rice, stew, and protein from a good buka: NGN 900-NGN 1,200.</p>

      <blockquote>"The people who eat badly are not the people who cannot afford to eat well. They are the people who make food decisions while hungry. Plan before you are hungry."</blockquote>

      <h2>Rule 3: Learn your vendor's schedule</h2>
      <p>Every good buka has a rhythm. The Egusi is freshest between 12pm and 1:30pm. The Jollof often runs out by 2pm. The Pepper soup is better in the evening when the pot has had longer on the fire. If you know these things - and you will, after two weeks - you always eat the best version of what you are paying for.</p>

      <h2>The numbers</h2>
      <p>Breakfast: NGN 300-400. Lunch: NGN 900-1,200. Dinner: NGN 700-900 (lighter - soup and swallow or rice from home). Total: NGN 1,900-NGN 2,500. That is real food, three times a day, in Lagos, under NGN 3,000. It is possible. It just requires thirty seconds of planning the night before.</p>
    `,
    category: "Budget & Savings",
    date: "February 2025",
    image: "/images/ophelie-bonavita-IoQr7epXYTo-unsplash.jpg",
    readTime: "5 min read",
    author: {
      name: "Tunde Nwachukwu",
      role: "Contributor",
      avatar: "T",
    },
  },
  {
    id: "5",
    title:
      "The office lunch trap: why eating at your desk is costing you more than money",
    excerpt:
      "Desk lunch habits hurt your budget, your energy, and your afternoon productivity.",
    content: `
      <p>Here is the lunch cycle that too many Nigerian office workers know: 8am, you arrive and tell yourself you will sort out lunch later. 12pm, you are deep in a meeting. 1pm, you are still in the meeting. 2pm, you surface, starving, grab whatever is closest - which is either overpriced, inadequate, or both. 3pm, energy crash. 5pm, you are eating a full meal again because lunch did not count.</p>

      <p>This is not a discipline problem. It is a planning problem. And it is costing you - in money, energy, and the kind of afternoon productivity that is directly correlated with having eaten a proper meal at the right time.</p>

      <h2>What a good lunch actually does</h2>
      <p>A proper lunch - not a snack, not biscuits and a Coke - regulates blood sugar through the afternoon, prevents the 3pm crash, reduces the size of dinner (and therefore the grocery bill), and is, frankly, one of the few genuine pleasures available on a weekday. It deserves thirty seconds of your attention the evening before.</p>

      <blockquote>"I started ordering my lunch on ChopQik at 9am - before I get busy. It arrives at 1pm and I eat away from my desk for twenty minutes. That twenty minutes is the most productive investment in my afternoon."</blockquote>

      <h2>The group order solution</h2>
      <p>If your office has five people, one person can create a group order on ChopQik, share a link on the team WhatsApp, and everyone adds their own item within ten minutes. One delivery, one rider, split payment handled automatically. No one has to collect money. No one has to remember who owes what. You all eat properly, together, for less than ordering separately - because the delivery fee is shared.</p>

      <p>Twenty minutes away from your screen, proper food, actual human conversation with your colleagues. This is not a luxury. This is just lunch, done correctly.</p>
    `,
    category: "Eating Tips",
    date: "February 2025",
    image: "/images/femi-oyekoya-rbEtzd20Qcw-unsplash.jpg",
    readTime: "4 min read",
    author: {
      name: "Folake Kehinde",
      role: "Contributor",
      avatar: "F",
    },
  },
  {
    id: "6",
    title: "How ChopQik works",
    excerpt:
      "From order placement to delivery, ChopQik removes confusion while protecting how local food businesses already operate.",
    content: `
      <p>There are two ways to build a food app.</p>

      <p>One is to start with the technology and force the food/product to adapt to it. The other is to start with how people already eat and handle purchase - and build something that fits into that reality without breaking it.</p>

      <p>ChopQik was built the second way. Because in Nigeria, food is not the problem. The chaos around it is. The lost order. The wrong price. The paper slip that vanishes the moment it has been paid. The missed call about a delivery. The rush hour where everything happens at once and something always falls through.</p>

      <blockquote>"The food was never the problem. The system around it was. That is what ChopQik fixes."</blockquote>

      <h2>Step 1 - You open the app and find your food</h2>
      <p>You open ChopQik. You see bukas, street food vendors, and restaurants near you - not curated for appearance, but for consistency. These are places people already eat from every day.</p>

      <p>You browse the menu the same way you would in person. Rice and stew. Add protein. Maybe a drink. Everything is familiar. Everything is priced upfront - what you see at the start is what you pay at the end. No surprises.</p>

      <h2>Step 2 - You place your order</h2>
      <p>You select your items, confirm your order, and pay through the app - by bank transfer, card, or mobile wallet. The whole thing takes less than a minute.</p>

      <p>The moment you confirm, your order goes directly to the vendor. Not into a generic system. Not to a call centre. Directly to the same person who would have taken your order across the counter - except now every item is recorded, time-stamped, priced correctly, and impossible to forget.</p>

      <h2>Step 3 - The vendor receives it instantly</h2>
      <p>On the vendor's side, your order appears on their ChopQik screen the second you place it. The table number or delivery tag is there. Every item is listed. The correct amount is shown.</p>

      <p>No paper slip. No shouting. No salesperson walking across a busy kitchen to hand over a handwritten note that might have the wrong price on it. The order is clear from the start.</p>

      <blockquote>"Same pot. Same fire. Same person cooking. ChopQik does not change the food - it protects everything around it."</blockquote>

      <h2>Step 4 - Your food is prepared</h2>
      <p>The food is made exactly the way it has always been made. ChopQik does not touch that part. The same recipe, the same kitchen, the same hands that have been cooking this food for years.</p>

      <p>What changes is that the vendor can now see every order in one clear queue - inside orders, outside orders, deliveries, and pickups - all in one place. Nothing is held in someone's memory. Nothing is written on a piece of paper that can get lost.</p>

      <h2>Step 5 - You know exactly what is happening</h2>
      <p>You do not have to call to ask "has my food left?" You do not have to wonder if your order was received. ChopQik keeps you updated at every stage:</p>
      <ul>
        <li>When your order has been received by the vendor.</li>
        <li>When your food is being prepared.</li>
        <li>When it is ready for pickup or on the way to you.</li>
      </ul>

      <p>For dine-in customers at the restaurant, your order goes to the kitchen the moment you scan the QR code on your table. You sit. You wait. Your food comes. No flagging anyone down. No repeating your order twice.</p>

      <h2>Step 6 - Delivery or pickup, your choice</h2>
      <p>If you chose delivery, a ChopQik rider picks up your food and brings it to you. If you chose pickup, your food is ready and waiting when you arrive. Either way, the vendor knows which is which - it is labelled clearly in the system from the moment you ordered.</p>

      <p>No confusion between the inside customer and the outside customer. No food going to the wrong person because the kitchen was managing two separate systems at once.</p>

      <blockquote>"One screen. Every order. Inside the restaurant and outside it - all in one place, all accounted for."</blockquote>

      <h2>What ChopQik actually removes</h2>
      <p>It does not replace the buka or the mama-put or the stopover kitchen. It removes the friction that surrounds them:</p>
      <ul>
        <li>The order that gets lost in the rush.</li>
        <li>The price that nobody can agree on after the food has been eaten.</li>
        <li>The delivery that never made it to the kitchen because the call came at the wrong moment.</li>
        <li>The end of day where the vendor counts the money and wonders if the total is right.</li>
      </ul>

      <p>The vendor cooks. You eat. ChopQik handles everything in between - cleanly, simply, and without the confusion that has always been part of the process.</p>

      <p><strong>Try it today.</strong><br />Order from a buka you already trust - now without the wait, the wrong order, or the confusion. Open ChopQik and find the best food near you.</p>
    `,
    category: "How It Works",
    date: "March 2025",
    image: "/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg",
    readTime: "5 min read",
    author: {
      name: "ChopQik Team",
      role: "Product",
      avatar: "C",
    },
  },
];
