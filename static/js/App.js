import { FallbackRoute, GetPageByPath, LoadPage } from "./router.js"
import Config from '../../config.json' with { type: "json" }

const App = $("#App")
const GetComponentPath = (comp) => Config['BaseURL'] + '/components/' + comp + '.html'

function StartApp()
{
    // do something
}

function LoadComponent(el)
{
    let parent = $(el)
    let data = parent.data()
    $.get(GetComponentPath(data['component']), function (compContent) {
        parent.html(compContent)
    })
}
function UpdatePageContent()
{
    let url = window.location.href.replace(Config['BaseURL'], '')
    let page = GetPageByPath(url)
    if(page === null) {
        LoadPage(FallbackRoute.page)
        window.location.href = FallbackRoute.page
    }

    LoadPage(page)
}

$(window).on('load', function ()
{
    UpdatePageContent()
})

$(document).ready(() => {
    $('[data-component]').each((i, el) => {
        LoadComponent(el)
    });
});

export {
    App,
    Config,

    StartApp,
    LoadComponent
}