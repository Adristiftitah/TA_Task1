const Page = require('./page');

class DashboardPage extends Page {
    get dashboard () { return $('.dashboard'); }
    get salesTab () { return $('#sales-tab'); }
    get salesInfo () { return $('.sales-info'); }

    open () {
        return super.open('dashboard');
    }
}

module.exports = new DashboardPage();
