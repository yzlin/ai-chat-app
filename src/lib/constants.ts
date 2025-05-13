export const chats = [
  {
    id: "chat-1",
    messages: [
      {
        id: "msg-1-1",
        content: "Hello, how can I help you?",
        role: "bot",
      },
      {
        id: "msg-1-2",
        content: "Generate a coffee shop website",
        role: "user",
      },
      {
        id: "msg-1-3",
        content:
          "Creating a coffee shop website involves several key components, including design, content, and functionality. Below is a basic outline and example content for a coffee shop website. You can use this as a template to build your site.\n" +
          "\n" +
          "### Coffee Shop Website Template\n" +
          "\n" +
          "#### 1. Home Page\n" +
          "- **Header**\n" +
          "  - Logo\n" +
          "  - Navigation Menu (Home, Menu, About Us, Contact, Order Online)\n" +
          "\n" +
          "- **Hero Section**\n" +
          "  - High-quality image of coffee or the shop\n" +
          '  - Welcome message: "Welcome to [Coffee Shop Name] - Your Cozy Coffee Haven!"\n' +
          "\n" +
          "- **Featured Products**\n" +
          "  - Showcase popular drinks and pastries with images and brief descriptions.\n" +
          "\n" +
          "- **Call to Action**\n" +
          '  - Button: "Order Now" or "View Menu"\n' +
          "\n" +
          "#### 2. Menu Page\n" +
          "- **Coffee**\n" +
          "  - Espresso - A rich and bold coffee experience.\n" +
          "  - Cappuccino - Creamy and frothy, perfect for any time of day.\n" +
          "  - Latte - Smooth and milky, with a hint of sweetness.\n" +
          "\n" +
          "- **Pastries**\n" +
          "  - Croissant - Flaky and buttery, a perfect pairing with coffee.\n" +
          "  - Muffin - Freshly baked with seasonal flavors.\n" +
          "\n" +
          "- **Specials**\n" +
          "  - Seasonal drinks or limited-time offers.\n" +
          "\n" +
          "#### 3. About Us Page\n" +
          "- **Our Story**\n" +
          "  - A brief history of the coffee shop, its mission, and values.\n" +
          "  \n" +
          "- **Meet the Team**\n" +
          "  - Photos and bios of the baristas and staff.\n" +
          "\n" +
          "#### 4. Contact Page\n" +
          "- **Location**\n" +
          "  - Address with a map integration.\n" +
          "  \n" +
          "- **Contact Form**\n" +
          "  - Fields for name, email, message, and a submit button.\n" +
          "\n" +
          "- **Social Media Links**\n" +
          "  - Icons linking to your social media profiles.\n" +
          "\n" +
          "#### 5. Order Online Page\n" +
          "- **Online Ordering System**\n" +
          "  - Integration with a payment gateway for online orders.\n" +
          "  - Option to choose pickup or delivery.\n" +
          "\n" +
          "### Example Content\n" +
          "\n" +
          "```html\n" +
          "<!DOCTYPE html>\n" +
          '<html lang="en">\n' +
          "<head>\n" +
          '    <meta charset="UTF-8">\n' +
          '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
          "    <title>[Coffee Shop Name]</title>\n" +
          '    <link rel="stylesheet" href="styles.css">\n' +
          "</head>\n" +
          "<body>\n" +
          "    <header>\n" +
          '        <div class="logo">[Coffee Shop Logo]</div>\n' +
          "        <nav>\n" +
          "            <ul>\n" +
          '                <li><a href="#home">Home</a></li>\n' +
          '                <li><a href="#menu">Menu</a></li>\n' +
          '                <li><a href="#about">About Us</a></li>\n' +
          '                <li><a href="#contact">Contact</a></li>\n' +
          '                <li><a href="#order">Order Online</a></li>\n' +
          "            </ul>\n" +
          "        </nav>\n" +
          "    </header>\n" +
          "\n" +
          '    <section id="home">\n' +
          "        <h1>Welcome to [Coffee Shop Name]</h1>\n" +
          "        <p>Your Cozy Coffee Haven!</p>\n" +
          '        <a href="#order" class="btn">Order Now</a>\n' +
          "    </section>\n" +
          "\n" +
          '    <section id="menu">\n' +
          "        <h2>Our Menu</h2>\n" +
          '        <div class="menu-item">\n' +
          "            <h3>Espresso</h3>\n" +
          "            <p>A rich and bold coffee experience.</p>\n" +
          "        </div>\n" +
          '        <div class="menu-item">\n' +
          "            <h3>Cappuccino</h3>\n" +
          "            <p>Creamy and frothy, perfect for any time of day.</p>\n" +
          "        </div>\n" +
          "        <!-- Add more menu items -->\n" +
          "    </section>\n" +
          "\n" +
          '    <section id="about">\n' +
          "        <h2>About Us</h2>\n" +
          "        <p>Our story began in [Year] with a passion for great coffee...</p>\n" +
          "    </section>\n" +
          "\n" +
          '    <section id="contact">\n' +
          "        <h2>Contact Us</h2>\n" +
          "        <p>Visit us at: [Address]</p>\n" +
          "        <form>\n" +
          '            <input type="text" placeholder="Your Name" required>\n' +
          '            <input type="email" placeholder="Your Email" required>\n' +
          '            <textarea placeholder="Your Message" required></textarea>\n' +
          '            <button type="submit">Send Message</button>\n' +
          "        </form>\n" +
          "    </section>\n" +
          "\n" +
          '    <section id="order">\n' +
          "        <h2>Order Online</h2>\n" +
          "        <p>Choose your favorite items and enjoy!</p>\n" +
          "        <!-- Online ordering system integration -->\n" +
          "    </section>\n" +
          "\n" +
          "    <footer>\n" +
          "        <p>&copy; 2025 [Coffee Shop Name]. All rights reserved.</p>\n" +
          '        <div class="social-media">\n' +
          '            <a href="#">Facebook</a>\n' +
          '            <a href="#">Instagram</a>\n' +
          '            <a href="#">Twitter</a>\n' +
          "        </div>\n" +
          "    </footer>\n" +
          "</body>\n" +
          "</html>\n" +
          "```\n" +
          "\n" +
          "### Additional Considerations\n" +
          "- **Responsive Design**: Ensure the website is mobile-friendly.\n" +
          "- **SEO Optimization**: Use relevant keywords to improve search engine visibility.\n" +
          "- **Analytics**: Integrate tools like Google Analytics to track visitor behavior.\n" +
          "- **Security**: Implement SSL for secure transactions, especially for the online ordering system.\n" +
          "\n" +
          "You can customize this template further based on your coffee shop's branding and specific offerings.",

        role: "bot",
      },
    ],
  },
  {
    id: "chat-2",
    messages: [
      {
        id: "msg-2-1",
        content: "Who’s donald trump?",
        role: "user",
      },
      {
        id: "msg-2-2",
        content:
          'Donald Trump is an American businessman, television personality, and politician who served as the 45th president of the United States from January 20, 2017, to January 20, 2021. Before entering politics, he was known for his real estate ventures, including the Trump Organization, and for hosting the reality TV show "The Apprentice." \n' +
          "\n" +
          "Trump's presidency was marked by significant events and controversies, including tax reform, immigration policy changes, and two impeachment trials. He is a member of the Republican Party and has been a polarizing figure in American politics, with a strong base of supporters as well as significant opposition. After his presidency, he has remained active in political discussions and has hinted at potential future political ambitions.",
        role: "bot",
      },
      {
        id: "msg-2-3",
        content: "Who’s Tim Cook?",
        role: "user",
      },
      {
        id: "msg-2-4",
        content:
          "Tim Cook is an American business executive best known as the CEO of Apple Inc., a position he has held since August 2011. He succeeded Steve Jobs, the co-founder of Apple, after Jobs resigned due to health issues. Cook joined Apple in 1998 as Senior Vice President for Worldwide Operations and played a crucial role in the company's growth and success, particularly in streamlining its supply chain and operations.\n" +
          "\n" +
          "Under Cook's leadership, Apple has expanded its product line and services, including the introduction of new products like the Apple Watch and AirPods, as well as the growth of services such as Apple Music, Apple TV+, and the App Store. Cook is also known for his focus on corporate social responsibility, including environmental sustainability and privacy issues. He has been an advocate for LGBTQ+ rights and has spoken out on various social and political issues.",
        role: "bot",
      },
      {
        id: "msg-2-1",
        content: "Hello, how can I help you?",
        role: "bot",
      },
      {
        id: "msg-2-2",
        content: "Generate a coffee shop website",
        role: "user",
      },
      {
        id: "msg-2-3",
        content:
          "Creating a coffee shop website involves several key components, including design, content, and functionality. Below is a basic outline and example content for a coffee shop website. You can use this as a template to build your site.\n" +
          "\n" +
          "### Coffee Shop Website Template\n" +
          "\n" +
          "#### 1. Home Page\n" +
          "- **Header**\n" +
          "  - Logo\n" +
          "  - Navigation Menu (Home, Menu, About Us, Contact, Order Online)\n" +
          "\n" +
          "- **Hero Section**\n" +
          "  - High-quality image of coffee or the shop\n" +
          '  - Welcome message: "Welcome to [Coffee Shop Name] - Your Cozy Coffee Haven!"\n' +
          "\n" +
          "- **Featured Products**\n" +
          "  - Showcase popular drinks and pastries with images and brief descriptions.\n" +
          "\n" +
          "- **Call to Action**\n" +
          '  - Button: "Order Now" or "View Menu"\n' +
          "\n" +
          "#### 2. Menu Page\n" +
          "- **Coffee**\n" +
          "  - Espresso - A rich and bold coffee experience.\n" +
          "  - Cappuccino - Creamy and frothy, perfect for any time of day.\n" +
          "  - Latte - Smooth and milky, with a hint of sweetness.\n" +
          "\n" +
          "- **Pastries**\n" +
          "  - Croissant - Flaky and buttery, a perfect pairing with coffee.\n" +
          "  - Muffin - Freshly baked with seasonal flavors.\n" +
          "\n" +
          "- **Specials**\n" +
          "  - Seasonal drinks or limited-time offers.\n" +
          "\n" +
          "#### 3. About Us Page\n" +
          "- **Our Story**\n" +
          "  - A brief history of the coffee shop, its mission, and values.\n" +
          "  \n" +
          "- **Meet the Team**\n" +
          "  - Photos and bios of the baristas and staff.\n" +
          "\n" +
          "#### 4. Contact Page\n" +
          "- **Location**\n" +
          "  - Address with a map integration.\n" +
          "  \n" +
          "- **Contact Form**\n" +
          "  - Fields for name, email, message, and a submit button.\n" +
          "\n" +
          "- **Social Media Links**\n" +
          "  - Icons linking to your social media profiles.\n" +
          "\n" +
          "#### 5. Order Online Page\n" +
          "- **Online Ordering System**\n" +
          "  - Integration with a payment gateway for online orders.\n" +
          "  - Option to choose pickup or delivery.\n" +
          "\n" +
          "### Example Content\n" +
          "\n" +
          "```html\n" +
          "<!DOCTYPE html>\n" +
          '<html lang="en">\n' +
          "<head>\n" +
          '    <meta charset="UTF-8">\n' +
          '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
          "    <title>[Coffee Shop Name]</title>\n" +
          '    <link rel="stylesheet" href="styles.css">\n' +
          "</head>\n" +
          "<body>\n" +
          "    <header>\n" +
          '        <div class="logo">[Coffee Shop Logo]</div>\n' +
          "        <nav>\n" +
          "            <ul>\n" +
          '                <li><a href="#home">Home</a></li>\n' +
          '                <li><a href="#menu">Menu</a></li>\n' +
          '                <li><a href="#about">About Us</a></li>\n' +
          '                <li><a href="#contact">Contact</a></li>\n' +
          '                <li><a href="#order">Order Online</a></li>\n' +
          "            </ul>\n" +
          "        </nav>\n" +
          "    </header>\n" +
          "\n" +
          '    <section id="home">\n' +
          "        <h1>Welcome to [Coffee Shop Name]</h1>\n" +
          "        <p>Your Cozy Coffee Haven!</p>\n" +
          '        <a href="#order" class="btn">Order Now</a>\n' +
          "    </section>\n" +
          "\n" +
          '    <section id="menu">\n' +
          "        <h2>Our Menu</h2>\n" +
          '        <div class="menu-item">\n' +
          "            <h3>Espresso</h3>\n" +
          "            <p>A rich and bold coffee experience.</p>\n" +
          "        </div>\n" +
          '        <div class="menu-item">\n' +
          "            <h3>Cappuccino</h3>\n" +
          "            <p>Creamy and frothy, perfect for any time of day.</p>\n" +
          "        </div>\n" +
          "        <!-- Add more menu items -->\n" +
          "    </section>\n" +
          "\n" +
          '    <section id="about">\n' +
          "        <h2>About Us</h2>\n" +
          "        <p>Our story began in [Year] with a passion for great coffee...</p>\n" +
          "    </section>\n" +
          "\n" +
          '    <section id="contact">\n' +
          "        <h2>Contact Us</h2>\n" +
          "        <p>Visit us at: [Address]</p>\n" +
          "        <form>\n" +
          '            <input type="text" placeholder="Your Name" required>\n' +
          '            <input type="email" placeholder="Your Email" required>\n' +
          '            <textarea placeholder="Your Message" required></textarea>\n' +
          '            <button type="submit">Send Message</button>\n' +
          "        </form>\n" +
          "    </section>\n" +
          "\n" +
          '    <section id="order">\n' +
          "        <h2>Order Online</h2>\n" +
          "        <p>Choose your favorite items and enjoy!</p>\n" +
          "        <!-- Online ordering system integration -->\n" +
          "    </section>\n" +
          "\n" +
          "    <footer>\n" +
          "        <p>&copy; 2025 [Coffee Shop Name]. All rights reserved.</p>\n" +
          '        <div class="social-media">\n' +
          '            <a href="#">Facebook</a>\n' +
          '            <a href="#">Instagram</a>\n' +
          '            <a href="#">Twitter</a>\n' +
          "        </div>\n" +
          "    </footer>\n" +
          "</body>\n" +
          "</html>\n" +
          "```\n" +
          "\n" +
          "### Additional Considerations\n" +
          "- **Responsive Design**: Ensure the website is mobile-friendly.\n" +
          "- **SEO Optimization**: Use relevant keywords to improve search engine visibility.\n" +
          "- **Analytics**: Integrate tools like Google Analytics to track visitor behavior.\n" +
          "- **Security**: Implement SSL for secure transactions, especially for the online ordering system.\n" +
          "\n" +
          "You can customize this template further based on your coffee shop's branding and specific offerings.",

        role: "bot",
      },
    ],
  },
];
