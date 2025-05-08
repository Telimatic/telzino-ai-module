// https://telzino-static.s3.us-west-1.amazonaws.com/ai-module.v0.1.0-alpha.js
(function() {

// If browsing at the domain level
if (typeof omp_level !== 'undefined' && omp_level === 'navigation_omp') {

const navList = document.getElementById('nav-buttons');
if (!navList) {
  console.error('AI Module: no nav list in the DOM);
  return;
}
  const firstNavButton = navList.querySelector('li');
  if (!firstNavButton) {
    console.error('No nav buttons found in nav list in the DOM');
    return;
  } 
  const aiButton = firstNavButton.cloneNode(true);
  navList.appendChild(clone);

  aiButton.id = 'nav-ai';
  const aiButtonNavTextSpan = aiButton.querySelector('.nav-text');
  if (aiButtonNavTextSpan) {
    aiButtonNavTextSpan.textContent = 'AI Agents';
  }
  
  const navButtonDiv = aiButton.querySelector('.nav-button');
if (navButtonDiv) {
  navButtonDiv.innerHTML = '<svg width="64px" height="64px" viewBox="-3.36 -3.36 62.72 62.72" xmlns="http://www.w3.org/2000/svg" stroke-width="0.00056" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M 26.6875 12.6602 C 26.9687 12.6602 27.1094 12.4961 27.1797 12.2383 C 27.9062 8.3242 27.8594 8.2305 31.9375 7.4570 C 32.2187 7.4102 32.3828 7.2461 32.3828 6.9648 C 32.3828 6.6836 32.2187 6.5195 31.9375 6.4726 C 27.8828 5.6524 28.0000 5.5586 27.1797 1.6914 C 27.1094 1.4336 26.9687 1.2695 26.6875 1.2695 C 26.4062 1.2695 26.2656 1.4336 26.1953 1.6914 C 25.3750 5.5586 25.5156 5.6524 21.4375 6.4726 C 21.1797 6.5195 20.9922 6.6836 20.9922 6.9648 C 20.9922 7.2461 21.1797 7.4102 21.4375 7.4570 C 25.5156 8.2774 25.4687 8.3242 26.1953 12.2383 C 26.2656 12.4961 26.4062 12.6602 26.6875 12.6602 Z M 15.3438 28.7852 C 15.7891 28.7852 16.0938 28.5039 16.1406 28.0821 C 16.9844 21.8242 17.1953 21.8242 23.6641 20.5821 C 24.0860 20.5117 24.3906 20.2305 24.3906 19.7852 C 24.3906 19.3633 24.0860 19.0586 23.6641 18.9883 C 17.1953 18.0977 16.9609 17.8867 16.1406 11.5117 C 16.0938 11.0899 15.7891 10.7852 15.3438 10.7852 C 14.9219 10.7852 14.6172 11.0899 14.5703 11.5352 C 13.7969 17.8164 13.4687 17.7930 7.0469 18.9883 C 6.6250 19.0821 6.3203 19.3633 6.3203 19.7852 C 6.3203 20.2539 6.6250 20.5117 7.1406 20.5821 C 13.5156 21.6133 13.7969 21.7774 14.5703 28.0352 C 14.6172 28.5039 14.9219 28.7852 15.3438 28.7852 Z M 31.2344 54.7305 C 31.8438 54.7305 32.2891 54.2852 32.4062 53.6524 C 34.0703 40.8086 35.8750 38.8633 48.5781 37.4570 C 49.2344 37.3867 49.6797 36.8945 49.6797 36.2852 C 49.6797 35.6758 49.2344 35.2070 48.5781 35.1133 C 35.8750 33.7070 34.0703 31.7617 32.4062 18.9180 C 32.2891 18.2852 31.8438 17.8633 31.2344 17.8633 C 30.6250 17.8633 30.1797 18.2852 30.0860 18.9180 C 28.4219 31.7617 26.5938 33.7070 13.9140 35.1133 C 13.2344 35.2070 12.7891 35.6758 12.7891 36.2852 C 12.7891 36.8945 13.2344 37.3867 13.9140 37.4570 C 26.5703 39.1211 28.3281 40.8321 30.0860 53.6524 C 30.1797 54.2852 30.6250 54.7305 31.2344 54.7305 Z" style="fill-rule:nonzero;" fill="currentColor"/></g></svg>';
}

  console.log('omp_level is "abc"');
}


/*let existingbutton = $('#nav-music');
let newbutton = existingbutton.clone();
newbutton.attr('id', 'nav-ai');
newbutton.find('.nav-text').html("AI Agents");
newbutton.find('.nav-button').html('<svg width="64px" height="64px" viewBox="-3.36 -3.36 62.72 62.72" xmlns="http://www.w3.org/2000/svg" stroke-width="0.00056" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M 26.6875 12.6602 C 26.9687 12.6602 27.1094 12.4961 27.1797 12.2383 C 27.9062 8.3242 27.8594 8.2305 31.9375 7.4570 C 32.2187 7.4102 32.3828 7.2461 32.3828 6.9648 C 32.3828 6.6836 32.2187 6.5195 31.9375 6.4726 C 27.8828 5.6524 28.0000 5.5586 27.1797 1.6914 C 27.1094 1.4336 26.9687 1.2695 26.6875 1.2695 C 26.4062 1.2695 26.2656 1.4336 26.1953 1.6914 C 25.3750 5.5586 25.5156 5.6524 21.4375 6.4726 C 21.1797 6.5195 20.9922 6.6836 20.9922 6.9648 C 20.9922 7.2461 21.1797 7.4102 21.4375 7.4570 C 25.5156 8.2774 25.4687 8.3242 26.1953 12.2383 C 26.2656 12.4961 26.4062 12.6602 26.6875 12.6602 Z M 15.3438 28.7852 C 15.7891 28.7852 16.0938 28.5039 16.1406 28.0821 C 16.9844 21.8242 17.1953 21.8242 23.6641 20.5821 C 24.0860 20.5117 24.3906 20.2305 24.3906 19.7852 C 24.3906 19.3633 24.0860 19.0586 23.6641 18.9883 C 17.1953 18.0977 16.9609 17.8867 16.1406 11.5117 C 16.0938 11.0899 15.7891 10.7852 15.3438 10.7852 C 14.9219 10.7852 14.6172 11.0899 14.5703 11.5352 C 13.7969 17.8164 13.4687 17.7930 7.0469 18.9883 C 6.6250 19.0821 6.3203 19.3633 6.3203 19.7852 C 6.3203 20.2539 6.6250 20.5117 7.1406 20.5821 C 13.5156 21.6133 13.7969 21.7774 14.5703 28.0352 C 14.6172 28.5039 14.9219 28.7852 15.3438 28.7852 Z M 31.2344 54.7305 C 31.8438 54.7305 32.2891 54.2852 32.4062 53.6524 C 34.0703 40.8086 35.8750 38.8633 48.5781 37.4570 C 49.2344 37.3867 49.6797 36.8945 49.6797 36.2852 C 49.6797 35.6758 49.2344 35.2070 48.5781 35.1133 C 35.8750 33.7070 34.0703 31.7617 32.4062 18.9180 C 32.2891 18.2852 31.8438 17.8633 31.2344 17.8633 C 30.6250 17.8633 30.1797 18.2852 30.0860 18.9180 C 28.4219 31.7617 26.5938 33.7070 13.9140 35.1133 C 13.2344 35.2070 12.7891 35.6758 12.7891 36.2852 C 12.7891 36.8945 13.2344 37.3867 13.9140 37.4570 C 26.5703 39.1211 28.3281 40.8321 30.0860 53.6524 C 30.1797 54.2852 30.6250 54.7305 31.2344 54.7305 Z" style="fill-rule:nonzero;" fill="currentColor"/></g></svg>');

const aNavLink = newbutton.find('.nav-link');

if(aNavLink) {
aNavLink.attr('id', 'LinkAIAgentsIndex');
aNavLink.removeAttr('href');
}

newbutton.removeClass("nav-link-current");

//newbutton.find('.nav-bg-image').attr("style", "background-position: 0;background-image:");

const element = newbutton.find('.nav-bg-image');
if (element) {
  element.remove();
}

newbutton.appendTo($('#nav-buttons'));


})();









// cache the original content once
let defaultContent;


// central sync function: if URL is /portal/ai, show iframe; otherwise restore
function syncContentWithUrl(){
  if (window.location.pathname === '/portal/ai') {
    injectIframe();
  } else {
    $('#content').html(defaultContent);
  }
}

$(function(){
  // 1) stash whatever was in #content by default
  defaultContent = $('#content').html();

  // 2) immediately sync on page-load (covers refresh/direct nav)
  syncContentWithUrl();

  // 3) your click still pushes state + injects
  $('#nav-ai .nav-link').on('click', async function(e){
    e.preventDefault();
    history.pushState({ai:true}, '', '/portal/ai');
    injectAIFrame(sessionToken);
  });

  // 4) keep back/forward in sync too
  $(window).on('popstate', syncContentWithUrl);
});




//newbutton.find('.nav-link').off('click');


// remove any onclick property
//newbutton.find('.nav-link').prop('onclick', null);

// remove any jQuery‐bound handlers
//newbutton.find('.nav-link').off();

/*let $link    = newbutton.find('.nav-link');
let $clean   = $link.clone(false);   // false = don’t copy events/data
$clean.removeAttr('onclick');        // strip inline attribute if present
$link.replaceWith($clean);
*/

/*let $link = newbutton.find('.nav-link');
$link.off('click');              // remove any jQuery‐bound handlers
$link.prop('onclick', null);     // clear any inline onclick="…" property
*/

/*newbutton.find('.nav-link')
  .replaceWith(function(){
    return $(this)
      .clone(false)          // clone without copying events/data
      .removeAttr('onclick');
  });
*/

//newbutton.find('.nav-link').css('pointer-events','none');

function getSessionToken() {
    const accessToken = localStorage.getItem('ns_t');
    
    console.log('abc');

    if (!accessToken) {
        console.error('No accessToken (ns_t) found in localStorage.');
        return;
    }

    // POST to get sessionToken
    return fetch('https://telimatic.devplusops.co/api/v1/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ accessToken })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to retrieve session token');
        }
        return response.json();
    })
    .then(data => {
        return data.sessionToken;
    })
    .catch(error => {
        console.error('Error injecting AI iframe:', error);
        alert("Failed to load AI Agents. Please try again later.");
    });
}


function injectIframe(sessionToken) {
        // Remove selected state from any existing buttons
        $("#nav-buttons li").removeClass ("nav-link-current");
        existingbutton.removeClass("nav-link-current");
        newbutton.addClass ("nav-link-current"); $('-navigation-title').html("Website");
        $('#content').html('<iframe src="https://telimatic.devplusops.co/agents?sessionToken=' + sessionToken + '" style="border: none; width: 100%;" scrolling="no" id="aiFrame"></iframe>');
        const iframe = document.getElementById('aiFrame');

            iframe.onload = function() {
                 // Security error on cross domain
                 //iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
                 iframe.style.height = '500px';
                };
}



newbutton.find('a').click(function(e) {
    e.stopImmediatePropagation();  // prevents jQuery’s handler from ever seeing it
  //  e.preventDefault();           // prevents default <a> behavior too . Currently solved by removing href attr
  history.pushState({ ai: true }, '', '/portal/ai');
  injectIframe();
  return false;
});


$(function(){
  if (window.location.pathname === '/portal/ai') {
    $('#content').html('<iframe src="/portal/ai" style="border: none; width: 100%;" scrolling="no" id="aiFrame"></iframe>');
  }
});

// 3) Handle back/forward so iframe stays in sync
/*$(window).on('popstate', function(e){
  if (window.location.pathname === '/portal/ai') {
    $('#content').html('<iframe src="/portal/ai" style="border: none; width: 100%;" scrolling="no" id="aiFrame"></iframe>');
  } else {
    $('#content').empty();  // or re-render your default landing content
  }
});
*/
