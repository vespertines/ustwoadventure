const latestInvestment = portfolioArray[portfolioArray.length - 1];
const latestInvestmentItem = `
    <a href="#modal-${ kebabCase(latestInvestment.name) }" target="_blank" rel="modal:open">
        <p class="tag">Latest investment:</p>
        <img data-src="${ latestInvestment.image }">
        <h1>${ latestInvestment.name }</h1>
        <p class="copy">${ latestInvestment.line }</p>
    </a>
`;


const portfolioMinusLatest = portfolioArray.slice(0, portfolioArray.length - 1);
const portfolioPreviewItems = shuffle(portfolioMinusLatest).slice(0, 5);
const portfolioPreview = createPortfolioItems(portfolioPreviewItems).join("");


const homePage = `
    <div class="home-content">

        <h1>
            ustwo Adventure invests in creative companies, differently
        </h1>

        <div class="top-row">

            <div class="path-for-companies">
                <h2>A path for companies to own their future</h2>
                <p>What if startup capital enabled companies to prioritise profitability, culture, and a long-term view?</p>
                <p>No equity by default, shared revenue, and a capped return. Our approach gives founders the option to grow their company as they see fit.</p>
                <a class="nav button internal" data-pathname="/approach" href="approach.html">Learn more</a>
                <!-- <a class="nav button internal" data-pathname="/apply" href="apply.html">Apply</a> -->
            </div>

            <div class="latest-investment">
                ${ latestInvestmentItem }
            </div>

        </div>

        <div class="our-portfolio">
            <h2>Our Portfolio</h2>
            <p>We invest in early-stage companies that are building something bigger than an exit.</p>
            <a class="nav button internal" data-pathname="/portfolio" href="portfolio.html">See all</a>
        </div>

        <div class="portfolio-preview">
            ${ portfolioPreview }
        </div>

        <div class="bottom-row">

            <div class="collective-genius">
                <h2>Collective genius</h2>
                <p>ustwo builds products, services and companies that make a meaningful impact on the world. By caring deeply for our people, clients, and partners, we believe that we can unleash the “collective genius” of all of us.</p>
                <a class="button external" href="approach.html">ustwo.com</a>
            </div>

            <img src="images/monument-valley.jpg">

        </div>

    </div>
`;
