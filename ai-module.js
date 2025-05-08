// https://telzino-static.s3.us-west-1.amazonaws.com/ai-module.v0.1.0-alpha.js
// https://telimatic.github.io/telzino-ai-module/ai-module.js
// https://ns-staging.dialtoen.com/ai-module.js

(function() {

    // If browsing at the domain level
    if (typeof omp_level === 'undefined' || omp_level !== 'navigation_omp') {
        console.log("Not at omp navigation");
        return;
    }

    const footerText = document.getElementById("footer").innerText;
    const versionMatch = footerText.match(/Manager Portal:\s+(\d+\.\d+(?:\.\d+)?)/);

    if (versionMatch) {
        const version = versionMatch[1];
        console.log("Version:", version);
    } else {
        console.log("Version not found.");
    }

    // Get the list that contains all the nav buttons
    const navList = document.getElementById('nav-buttons');
    if (!navList) {
        console.error('AI Module: no nav list in the DOM');
        return;
    }

    // Get the first nav button from the list
    const firstNavButton = navList.querySelector('li');
    if (!firstNavButton) {
        console.error('No nav buttons found in nav list in the DOM');
        return;
    }

    // Create a new AI button by cloning the first button from the list
    const aiButton = firstNavButton.cloneNode(true);
    aiButton.id = 'nav-ai';

    // Remove the current marker if present
    aiButton.classList.remove("nav-link-current");

    // Update button label to AI Agents
    const aiButtonNavTextSpan = aiButton.querySelector('.nav-text');
    if (aiButtonNavTextSpan) {
        aiButtonNavTextSpan.textContent = 'AI Agents';
    }

    // Update the background image to the AI Agents icon
    const navButtonDiv = aiButton.querySelector('.nav-bg-image');
    if (navButtonDiv) {
        navButtonDiv.style.backgroundImage = "url('https://ns-staging.dialtoen.com/agent.png')";
    }

    // Update the button link id and href
    const navLink = aiButton.querySelector('.nav-link');
    if (navLink) {
        navLink.id = 'LinkAIAgentsIndex';
        navLink.href = '/portal/home?module=ai-agents';
    }

    // Add AI Agents button to nav list
    navList.appendChild(aiButton);

    if (window.location.pathname === '/portal/home' && new URLSearchParams(window.location.search).get('module') === 'ai-agents') {
        console.log('AI Agents module requested');

        async function loadIframe() {
            // Remove selected state from any nav buttons
            document.querySelectorAll("#nav-buttons li").forEach(el => {
                el.classList.remove("nav-link-current");
            });

            // Set current arrow to AI Agents button
            const aiButton = document.getElementById("nav-ai");
            if (aiButton) {
                aiButton.classList.add("nav-link-current");
            }


            // Set inner HTML of the element with ID "-navigation-title"
            //alert(document.getElementById('LinkHomeIndex').innerHTML);
            //document.getElementById('LinkHomeIndex').innerHTML = "AI Agents";

            const navigationSubbarLink = document.querySelector('#navigation-subbar #LinkHomeIndex');
            if (navigationSubbarLink) {
                navigationSubbarLink.textContent = 'AI Agents';
            }

            $('#content').html('');

            //activateLoadMsg(true);
            var loaderHtml = '<div style="float: right;"><div class="loading-spinner la-ball-spin-clockwise la-sm" style="color: inherit;"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';


            var loadingMsg = _('Loading') + '...';
            var waitMsg = "Please wait" + '...';
            jsFlash(loaderHtml + "<div class='flashMsgContainer loader-flash' style='opacity: 0'>" + loadingMsg + " <span>" + waitMsg + "</span></div>", "info", 999999, function() {
                //                $('.flashMessage.new').css({width:'17px'}).animate({opacity: 1},250);
                //                 animateFlashMessage( ( loadingMsg.length + waitMsg.length ) * 8); // calc width of msg for expand anim
                var newMsg = $('.flashMessage.new');
                var newMsgTxt = $('.flashMessage.new .flashMsgContainer');
                var width = (loadingMsg.length + waitMsg.length) * 8;
                newMsg.removeClass('new').css({
                    opacity: 1,
                    width: width
                });

                newMsgTxt.css({
                    display: 'inline-block',
                    opacity: 1
                });

                newMsgTxt.find('span').css({
                    opacity: 1
                });
            });

            const sessionToken = await getSessionToken();

            // Set inner HTML of the element with ID "content"
            document.getElementById('content').innerHTML = '<iframe src="https://telimatic.devplusops.co/agents?sessionToken=' + sessionToken + '" style="border: none; width: 100%;" scrolling="no" id="aiFrame"></iframe>';

            // Get the iframe element
            const iframe = document.getElementById('aiFrame');

            iframe.onload = function() {
                // Security error on cross domain
                //iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
                iframe.style.height = '500px';
                deactivateLoadMsg()
            };



        }
        loadIframe();

    }
})();

async function getSessionToken() {
    const accessToken = localStorage.getItem('ns_t');

    if (!accessToken) {
        throw new Error('No accessToken found in localStorage.');
    }

    let response;
    try {
        response = await fetch('https://telimatic.devplusops.co/api/v1/session', {
            method: 'POST',
            // Avoid sending Content-Type header with application/json value to allow browser to categorize as simple and avoid CORS prefetch request
            /*headers: {
               'Content-Type': 'application/json'
            },*/
            body: JSON.stringify({
                accessToken
            })
        });

    } catch (error) {
        throw new Error('Failed to create AI Agents module session token: ', error);
    }

    if (!response.ok) {
        throw new Error(`Session request failed with status ${response.status}`);
    }

    let data;
    try {
        data = await response.json();
    } catch (error) {
        throw new Error('Response from session endpoint was not valid JSON.');
    }

    if (!data.sessionToken || typeof data.sessionToken !== 'string') {
        throw new Error('Session token missing or invalid in server response.');
    }

    return data.sessionToken;
}

function injectIframe(sessionToken) {
    // Remove selected state from any existing buttons
    $("#nav-buttons li").removeClass("nav-link-current");
    existingbutton.removeClass("nav-link-current");
    newbutton.addClass("nav-link-current");
    $('-navigation-title').html("Website");
    $('#content').html('<iframe src="https://telimatic.devplusops.co/agents?sessionToken=' + sessionToken + '" style="border: none; width: 100%;" scrolling="no" id="aiFrame"></iframe>');
    const iframe = document.getElementById('aiFrame');

    iframe.onload = function() {
        // Security error on cross domain
        //iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        iframe.style.height = '500px';
    };
}
