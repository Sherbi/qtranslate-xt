(()=>{var n=jQuery;n((function(){var t=qTranslateConfig.js.get_qtx(),e=function(n,e){t.addDisplayHook(e)},i=function(t){var i=n(t);i.find(".row-title, .description").each(e),i.find("td.name span.inline").css("display","none")},r=n("#the-list"),a=n("#the-list > tr").length,l=function(){var n=r.children();if(a===n.length)return!1;var t=a>n.length;if(a=n.length,t)return!1;for(var e=0;e<n.length;++e){var l=n[e];i(l)}return!1};r.each((function(t,e){n(e).bind("DOMSubtreeModified",l)})),n("#the-list > tr > td.name span.inline").css("display","none")}))})();