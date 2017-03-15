const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(request => {
    if (request.type === 'facebook') {
        if (request.text === 'Co zabrać na wyjazd?') {
            const newMsg = new fbTemplate.Text('Na jak długo wyjeżdżasz?');
            
            return newMsg
            .addQuickReply('1 dzień', '1 dzień')
            .addQuickReply('3-4 dni', '3-4 dni')
            .addQuickReply('tydzień', 'tydzień')
            .addQuickReply('2 tygodnie', '2 tygodnie')
            .addQuickReply('miesiąc', 'miesiąc')
            .addQuickReply('> niż miesiąc', '> niż miesiąc')
            .get();
        } else if (request.text === '1 dzień') {
            return 'przeżyjesz bez niczego :P'
        } else if (request.text === '3-4 dni') {
            return 'zabierz 4 koszulki,\nspodnie,\nładowarkę do telefonu,\nbieliznę,\nkosmetyczkę,\nbatony';
        } else if (request.text === 'tydzień') {
            return 'weź kilka koszulek,\n2 pary spodni,\nbieliznę,\nszampon,\nszczoteczkę,\npastę do zębów,\nżel pod prysznic,\nręczniki,\nsłodycze,\n 🐱';

        } else if (request.text === '2 tygodnie') {
            return 'przykro mi, jak wyjeżdżasz na 2 tygodnie to sobie znajdź inne źródła wiadomości z informacjami co trzeba spakować. Hue hue.';

        } else if (request.text === 'miesiąc') {
            return new fbTemplate.Generic()
                .addBubble('Kompletna lista do spakowania', 'Na tej stronie znajdziesz bardzo szczegółową listę rzeczy do spakowania.')
                .addButton('Kompletna lista', 'http://kropkinamapie.pl/zabrac-gory-morze-wakacje-wyjazd-check-lista.html')
                .addButton('Inna fajna lista', 'http://podrozniczo.pl/10-rzeczy-ktore-warto-zabrac-ze-soba-w-podroz/')
                .addButton('Dzięki', 'Dzięki')
                .get();

        } else if (request.text === '> niż miesiąc') {
            return 'kup tam mieszkanie,\nwszystko kup na miejscu,\nnie zapomnij wziąć pieniędzy,\nweź jeszcze więcej pieniędzy.\nTo wszystko.';
        } else if (request.text === 'Dzięki' || request.text === 'dzięki' || request.text === 'thx' || request.text === 'Dziękuję') {
            return 'Proszę. Taka moja praca :)'
        } else {
            return 'Żeby rozpocząć zadaj mi pytanie: Co zabrać na wyjazd?';
        }
    }
});
