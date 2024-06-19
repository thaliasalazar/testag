document.getElementById('button1')?.addEventListener('click', function() {
    alert('Découvrez les avantages de GTM!');
    dataLayer.push({'event': 'button_click', 'button_id': 'button1'});
    window.open('https://marketingplatform.google.com/intl/fr/about/tag-manager/benefits/', '_blank');
});

document.getElementById('button2')?.addEventListener('click', function() {
    alert('Découvrez comment fonctionne GA4!');
    dataLayer.push({'event': 'button_click', 'button_id': 'button2'});
    window.open('https://support.google.com/tagmanager/answer/6102821?hl=fr', '_blank');
});
