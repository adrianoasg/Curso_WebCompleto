import $ from 'jquery'

const loadHtmlSuccessCallbaks = []

export  function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbaks.includes(callback)) {
        loadHtmlSuccessCallbaks.push(callback)
    }
}

function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url, 
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbaks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()