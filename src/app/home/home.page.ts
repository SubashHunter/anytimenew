import { Component } from '@angular/core';
import { NewsApiService } from './../providers/news-api.service';
import { COUNTRIES } from '../providers/countries';
import { CATEGORIES } from '../providers/categories';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 

    // articles:Array<any> = [ 
    //   {
    //     "source": { 
    //       "id": null, 
    //       "name": "Yahoo.com" 
    //       }, 
    //       "author": "Natalie Neysa Alund", 
    //       "title": "Two dead, 768 ill amid Salmonella outbreak affecting 48 states, CDC says - Yahoo News", 
    //       "description": "The CDC reports two separate outbreaks – one linked to contact with poultry in backyard flocks and one linked to contact with pig ear dog treats.", 
    //       "url": "https://news.yahoo.com/two-dead-768-ill-amid-011759301.html", 
    //       "urlToImage": 
    //      "https://s.yimg.com/os/mit/media/m/social/images/social_default_logo-1481777.png", 
    //       "publishedAt": "2019-07-25T01:32:57Z", 
    //       "content": "NASHVILLE, Tenn. Two people are dead and 768 are ill due to a nationwide Salmonella outbreak, the Centers for Disease Control and Prevention reported.\r\nThe CDC recently posted updates regarding two separate outbreaks one linked to contact with poultry in bac… [+1258 chars]" 
          
    //     },
    //     {
        
    //     "source": {
    //     "id": null,
    //     "name": "Newsbtc.com"
    //     },
    //     "author": "Nick Chong",
    //     "title": "Ethereum Is Now Officially Net Negative in 2019, Down 91% From ATH",
    //     "description": "The Ethereum price was at $130 at the start of the year on January 1st across major crypto exchanges. With 12 days left on the calendar, ETH is now net negative in 2019, which comes in stark contrast to the 70% performance that Bitcoin has seen in 2019. Relat…",
    //     "url": "https://www.newsbtc.com/2019/12/17/ethereum-now-officially-net-negative-2019-91-drop-from-ath/",
    //     "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2019/12/shutterstock_760660864-1200x780.jpg",
    //     "publishedAt": "2019-12-17T21:45:18Z",
    //     "content": "The Ethereum price was at $130 at the start of the year on January 1st across major crypto exchanges. With 12 days left on the calendar, ETH is now net negative in 2019, which comes in stark contrast to the 70% performance that Bitcoin has seen in 2019.\r\nIn t… [+2806 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Prnewswire.com"
    //     },
    //     "author": null,
    //     "title": "Bitcasino.io Champions Crypto-Community in #Teamtrees Movement Donating Over $100k",
    //     "description": "TALLINN, Estonia, Dec. 17, 2019 /PRNewswire/ -- Bitcasino.io, the pioneering online Bitcoin casino, has pledged a massive 101,010 trees (at $1 per tree) to the ever-growing viral #teamtrees movement, which gained traction after pledging to plant 20 million tr…",
    //     "url": "https://www.prnewswire.com/news-releases/bitcasinoio-champions-crypto-community-in-teamtrees-movement-donating-over-100k-300976406.html",
    //     "urlToImage": "https://mma.prnewswire.com/media/1056422/Bitcasino.jpg?p=facebook",
    //     "publishedAt": "2019-12-17T21:30:00Z",
    //     "content": "TALLINN, Estonia, Dec. 17, 2019 /PRNewswire/ -- Bitcasino.io, the pioneering online Bitcoin casino, has pledged a massive 101,010 trees (at $1 per tree) to the ever-growing viral #teamtrees movement, which gained traction after pledging to plant 20 million tr… [+3474 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo.com"
    //     },
    //     "author": "Yilun Cheng",
    //     "title": "ErisX launches its crypto futures market – starting with bitcoin",
    //     "description": "Crypto exchange operator ErisX has launched its cryptocurrency futures market. The firm originally planned to roll out futures products tied a wide range of coins, but currently only supports bitcoin futures contracts. The post ErisX launches its crypto futur…",
    //     "url": "https://finance.yahoo.com/news/erisx-launches-crypto-futures-market-212307049.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/NcbQaMsiX.4KKQhOMF0ArA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD03MjA-/https://s.yimg.com/uu/api/res/1.2/q7ChPSS0lnHEFps84mZBTw--~B/aD00NTA7dz04MDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/the_block_83/cf44f827b851756b758c8e80aee2bcb9",
    //     "publishedAt": "2019-12-17T21:23:07Z",
    //     "content": "Crypto exchange operator ErisX has launched its cryptocurrency futures market. \r\nThe firm originally planned to roll out futures products tied a wide range of coins, but currently only supports bitcoin futures contracts. The Block reported Monday night that E… [+869 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Newsbtc.com"
    //     },
    //     "author": "Cole Petersen",
    //     "title": "Ethereum Gets a B, EOS Gets an F: Node Quality Study Ranks Top Crypto Assets",
    //     "description": "As competition builds within the blockchain industry, investors and prospective users alike have to undergo the arduous task of evaluating which blockchains have the best fundamental strength. Ethereum has long been favored by users and developers, but over t…",
    //     "url": "https://www.newsbtc.com/2019/12/17/ethereum-gets-a-b-eos-gets-an-f-node-quality-study-ranks-top-crypto-assets/",
    //     "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2019/12/shutterstock_1341095183-1200x780.jpg",
    //     "publishedAt": "2019-12-17T21:00:29Z",
    //     "content": "As competition builds within the blockchain industry, investors and prospective users alike have to undergo the arduous task of evaluating which blockchains have the best fundamental strength. Ethereum has long been favored by users and developers, but over t… [+2435 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Forbes.com"
    //     },
    //     "author": "Charles Bovaird, Contributor, Charles Bovaird, Contributor https://www.forbes.com/sites/cbovaird/",
    //     "title": "XRP Falls To Lowest Since 2017 As Crypto Markets See Red",
    //     "description": "XRP fell to a more-than two-year low today. Will the digital asset recover soon?",
    //     "url": "https://www.forbes.com/sites/cbovaird/2019/12/17/xrp-falls-to-lowest-since-2017-as-crypto-markets-see-red/",
    //     "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5df9413e25ab5d0007cea8a1%2F960x0.jpg",
    //     "publishedAt": "2019-12-17T21:00:15Z",
    //     "content": "XRP prices dropped today, helping lead the cryptocurrency markets lower (Photo by S3studio/Getty ... [+] Images)\r\n2018 S3studio\r\nXRP fell sharply today, suffering greater losses than other major digital currencies and hitting its lowest in more than two years… [+4796 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Coindesk.com"
    //     },
    //     "author": "Bradley Keoun",
    //     "title": "Canaan’s Post-IPO Stock Plunge Reveals Sales Slump, Price War With Bitmain",
    //     "description": "Cryptocurrency mining computer-maker Canaan Inc. may have picked the worst time for its $1 billion initial public stock offering.",
    //     "url": "https://www.coindesk.com/canaans-post-ipo-stock-plunge-reveals-sales-slump-price-war-with-bitmain",
    //     "urlToImage": "https://static.coindesk.com/wp-content/uploads/2016/06/Avalon.jpg",
    //     "publishedAt": "2019-12-17T21:00:11Z",
    //     "content": "Cryptocurrency mining computer-maker Canaan Inc. may have picked the worst time for its initial public stock offering, which valued the company at $1.3 billion.\r\nThe stock price has declined in all but four of the first 17 trading sessions since the Hangzhou-… [+7802 chars]"
    //     }
      
    //   ]
  articleList: Array<any>=[];
  showPageLoader: boolean = false;
  countryList: Array<any> = COUNTRIES;
  selectedCountry = this.countryList[0];
  categoryList: Array<any> = CATEGORIES;
  selectedCategory = this.categoryList[0];
  constructor(private newsApiService: NewsApiService) {
    this.getTopHeadlines();
  }

  getTopHeadlines(){
    this.showPageLoader = true;
    this.newsApiService.getTopHeadlines(this.selectedCountry.code,this.selectedCategory.name).subscribe((result:any)=>{
      this.articleList = result.articles.filter(article=>article.urlToImage);
      this.showPageLoader = false;
    },(error)=>{
    console.log('error', error);
    this.showPageLoader = false;
  });
  }

  handleChange(){
    this.getTopHeadlines();
  }
  doRefresh(event)
  {
    this.getTopHeadlines();
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }

}
