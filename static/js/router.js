import { Routes } from "./routes.js"
import { App, Config } from "./App.js"

const FallbackRoute = Routes[1]

const GetPagePath = (page) => Config['BaseURL'] + '/pages/' + page + '.html'

function GetPageByPath(path)
{
    var page = null
    Routes.forEach(route => {
        if(route.path == path) {
            page = route.page;
        }
    })
    return page
}

function LoadPage(page)
{
    $.get(GetPagePath(page), function (pageContent) {
        App.html(pageContent)
    })
}

export {
    FallbackRoute,

    GetPageByPath,
    LoadPage
} 