const cheerio = require('cheerio');
const axios = require('axios');


async function scrape(url)
{
    //INIT
    let res = {};
    let inf = await axios.get(url);
    let $ = cheerio.load(inf.data);

    //get and put title
    res['title'] = $('title').text();

    //get meta content
    let descr = $('meta[name="description"]').attr("content");
    let keywords = $('meta[name="keywords"]').attr("content");
    let key_list = keywords.split(",").map(obj => obj.trim());

    //put meta content
    res['meta'] = {
        description: descr,
        keywords: key_list,
    };

    //content for main page
    let content = [];
    if (key_list.find(elm => elm === "quotes") !== undefined || key_list.find(elm => elm === "Quotes") !== undefined)
    {
        const q_obj = $('.quote').each((index, element) => {
            content.push(
                {
                    quote: $(element).find('.quote-text').text().trim(),
                    author: $(element).find('.quote-author').text().trim(),
                    tags: $(element).find('.quote-tags').text().trim().split("\n").map(el => el.trim()),
                }
            );
        });
    }
    else if (key_list.find(elm => elm === "harry") !== undefined || key_list.find(elm => elm === "Harry") !== undefined)
    {
        const h_obj = $('.row').each((index, element) => {
            content.push(
                {
                    title: $(element).find('.title').text(),
                    year: $(element).find('.year').text(),
                    director: $(element).find('.director').text(),
                    boxOffice: $(element).find('.box-office').text().trim(),
                }
            )
        });
    }
    else if (key_list.find(elm => elm === "random") !== undefined || key_list.find(elm => elm === "Random") !== undefined)
    {
        const r_obj = $('.fact').each((index, element) => {
            content.push(
                {
                    fact: $(element).text().trim(),
                }
            )
        });
    }
    //put contant inside final result
    res['content'] = content;

    //get subpage
    let l_obj = $('a');
    let subpages = [];
    l_obj.each((index, element) => {
        subpages.push(
            {
                id: $(element).attr("id"),
                text: $(element).text(),
                href: $(element).attr("href"),
                title: 0,
                content: 0,
            }
        )
    });

    for (let k of subpages)
    {
        //faire de l'asynchrone
        let link = await axios.get(k.href);
        $$ = cheerio.load(link.data);
        k.title = $$('title').text();
        let keywords2 = $$('meta[name="keywords"]').attr("content");
        let key_list2 = keywords2.split(",").map(obj => obj.trim());
        let content2 = [];
        //content for subpages
        if (key_list2.find(elm => elm === "quotes") !== undefined || key_list2.find(elm => elm === "Quotes") !== undefined)
        {
            const q_obj = $$('.quote').each((index, element) => {
                content2.push(
                    {
                        quote: $$(element).find('.quote-text').text().trim(),
                        author: $$(element).find('.quote-author').text().trim(),
                        tags: $$(element).find('.quote-tags').text().trim().split("\n").map(el => el.trim()),
                    }
                );
            });
        }
        else if (key_list2.find(elm => elm === "harry") !== undefined || key_list2.find(elm => elm === "Harry") !== undefined)
        {
            console.log('test2');
            const h_obj = $$('.row').each((index, element) => {
                content2.push(
                    {
                        title: $$(element).find('.title').text(),
                        year: $$(element).find('.year').text(),
                        director: $$(element).find('.director').text(),
                        boxOffice: $$(element).find('.box-office').text().trim(),
                    }
                )
            });
        }
        else if (key_list2.find(elm => elm === "random") !== undefined || key_list2.find(elm => elm === "Random") !== undefined)
        {
            console.log('test3');
            const r_obj = $$('.fact').each((index, element) => {
                content2.push(
                    {
                        fact: $$(element).text().trim(),
                    }
                )
            });
        }
        k.content = content2;
    }

    //put subpage inside res
    res['subpages'] = subpages;

    return res;
}

module.exports = {
    scrape,
}

/*let data = scrape("http://localhost:5050/index.html");
data.then(res => console.dir(res, {depth: null}));*/