import * as ArticlesModel from './articles';
import 'babel-polyfill';
if (window.location.pathname === "/lesson3-hw.html") {
    window.addEventListener('load', function () {
        console.log('lesson3-hw')
        async function testArticlesModel() {
            let articles = await ArticlesModel.all();
            console.log('articles count = ' + articles.length);

            // берём случайный индекс
            let ind = Math.floor(Math.random() * articles.length);
            console.log('select index ' + ind + ', id = ' + articles[ind].id)

            // получаем статью по id
            let article = await ArticlesModel.one(articles[ind].id);
            console.log(article);
            // пробуем удалить её

            let removeRes = await ArticlesModel.remove(article.id);
            console.log('что с удалением? - '+removeRes);

            let articlesNewList = await ArticlesModel.all();
            console.log('articles count = ' + articlesNewList.length);
        }




        testArticlesModel().then(()=>{
            
        }).catch((e)=>{
            this.document.querySelector('body').innerHTML = `<p>${e.message}</p>`;
            console.log(e);
        });
        /*
                ArticlesModel.all((articles) => {
                    console.log('articles count = ' + articles.length);
        
                    // берём случайный индекс
                    let ind = Math.floor(Math.random() * articles.length);
                    console.log('select index ' + ind + ', id = ' + articles[ind].id)
        
                    // получаем статью по id
                    ArticlesModel.one(articles[ind].id, (article) => {
                        console.log(article);
        
                        // пробуем удалить её
                        ArticlesModel.remove(article.id, (res) => {
                            console.log('что с удалением? - ' + res);
        
                            // а сколько статей в базе сейчас
                            ArticlesModel.all((articles) => {
                                console.log('articles count = ' + articles.length);
                            }, (error) => {
                                console.log(error + ' in articles list after delete');
                            });
                        }, (error) => {
                            console.log(error + ' in articles delete');
                        })
        
                    }, (error) => {
                        console.log(error + ' in articles one');
                    });
        
                }, (error) => {
                    console.log(error + ' in articles list');
                });*/
    });
}