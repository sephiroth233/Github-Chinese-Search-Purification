// ==UserScript==
// @name         Github中文搜索净化
// @namespace    http://danke666.top/
// @version      1.6
// @author       DanKe, Mightnire
// @description  Github中文搜索净化，屏蔽特定用户群
// @match        https://github.com/search*
// @match        https://github.com/*
// @grant        none
// @downloadURL  https://github.com/Mightnire/Github-Chinese-Search-Purification/raw/refs/heads/main/GithubChineseSearchPurification.user.js
// @updateURL    https://github.com/Mightnire/Github-Chinese-Search-Purification/raw/refs/heads/main/GithubChineseSearchPurification.user.js
// ==/UserScript==

(function() {
    'use strict';

    // 定义要检测和删除的用户名列表
    const usernamesToRemove = [
        'cirosantilli', //我去你妈了个表就是你这私人东西祸害环境
         // 添加用户，来自 https://github.com/BonjourFeng/Github-Search-Purification/blob/main/script.js
        'wumaoland', 'codin-stuffs', 'cheezcharmer', 'gege-circle', 'zhaohmng-outlook-com', 'zaohmeing', 'Daravai1234', 'candice531033938', 'jk-ice-cream', 'jk-ice-cream-250', 'sky8964', 'pxvr-official', 'zpc1314521', 'jjzhang166', 'panbinibn', 'programthink', 'hello-world-1989', 'b0LBwZ7r5HOeh6CBMuQIhVu3-s-random-fork', 'thethetpvmy', 'wwwswitch520cc', 'shotoanqrob', 'sitempeanhkkwg', 'fukeluo', '1206256980', 'curees', 'yuoppo', 'Createree', 'vghl', 'wholedata', 'dunjian', 'mksshare', 'abshare', 'tpxdat', 'jhdyg', 'changfengqj', 'Dujltqzv', 'xmq1024', 'golade', 'kdjfhd', 'dkjhy', 'junsolg', 'dkjiiu', 'faithhow', 'yamtioy', 'zugzuc', 'lusvont', 'kenyatas', 'koeheu', 'juttama', 'duspub', 'wuqdid', 'visxud', 'suyfic', 'qokkod', 'roepuo', 'purfob', 'gitprocode', 'ynwynw', 'hanguodianying', 'hgyw', '69sm', 'urlapp', 'Augensternhx', 'urlweb', 'fuliso', 'nishjd', '36dshipin', 'hapump', 'zhguoxmw', 'KoreanMovies', 'hanjutv', 'mamadepengyou', 'mamatouyunmuxuan', 'erzideqizi', 'wodeqizidejiejie', 'xiaoyizidemeng', 'qingyuzongheng', 'jiangnanerxi', 'hanguobiaomei', 'djhgy', 'XXOOBY', 'baoyu1024', 'kk234kkkk', '15923-ORIX', 'wutaed', 'webzhibo', 'apptuijian', 'follow666', 'yu90892', 'aconteet', 'getmal', 'itxinfei', 'mingtiana', 'midoushipin', 'paofushipin', 'yinghanshipin', 'GTVapp', 'huangyouquan', 'devlookme', 'audwq', 'jhdgy', 'di6gandh', 'shuangyuzhibo', 'lvchazhibo', 'xiaolanshipin', 'bofangqi', 'yingtaoshipin', 'xiangfeizhibo', 'lvchaApp', 'luoshenzhibo', 'yaojizhibo', 'mudanzhibo', 'aiaizhibo', 'gaochaoqwe', 'jiolde', 'lsdhw', 'kanavdaohang', 'harnh', 'kuadaner', 'wapquan', 'laoyeer', 'reteres', 'haoersn', 'zhengjianzhong0107', 'huaaweiCode', 'jianjian00001', 'm2ak-dev', 'yyzwz', 'froginwe11', 'luanmenglei', 'xijinping0', 'cyqqq', 'qldaisd', 'lTbgykio', 'yao270161651', 'jt0008jt0008', '15625103741', 'sky1234566778', 'chfucao', 'chifuyidaocao', 'updrmeltm', 'alice548', 'yazm000', 'cpnorg', 'tffygbu', 'Liberty-China', '1989CCP', 'liulihaocai', 'RevolutionaryCommitteeCPC', 'LeiyanLu', 'webdao', 'GC4WP', 'tu01', 'ziliao1', 'zzs70', 'ff2017', 'guitu2017', 'tu2017', 'wm001', 'wnel2017', 'dunhlino', 'nelaliox', 'jianjian3219', 'giteecode', '666bears', 'wang-buer', 'id681ilyg316', 'uhjid', 'usdui', 'uhskl', 'uyjks', 'uhskldf', 'itgsi5', 'uifskv', 'uhgask', 'igfkld', 'udsjd', 'ufodk', 'uigsjt', 'ighfrs', 'haivs', 'idrkkld', 'yuisju', 'uldydj', 'uyuek', 'tydfj', 'uuedif', 'ykwsw3', 'uigsi7', 'tyiis', 'ykeik', 'ukvdj', 'uyikl', 'ufzekg', 'yiksure', 'rhksgz', 'rthls', 'rhjaw', 'rehlxs', 'thzsgt', 'tdidst', 'eglct', 'tjkdyu', 'tjlks', 'tjjds', 'rllfs', 'rhkstd', 'yjscdr', 'servisee', 'ufsjzf', 'bvnbvnfgd', 'duliyingshi', 'calendi', 'mayeobey', 'QQMusic-Jay-Chou', 'boylovecomic', 'bt9527', 'FarmerChina', 'Waymon102092', 'baofx', 'biehd', 'moonpas', 'lyqilo', 'liliqh', 'hourv', 'xinfue', 'jijidianying', 'YuyanCai', 'jtdh', 'isdkxr', 'yhildyu', 'ykldyld', 'igsigk', 'uidekj', 'iufskw', 'udsjhf', 'tjkdx', 'rtkist', 'tjlsyh', 'euhf', 'rjzsht', 'rhkdzu', 'ehkkld', 'xzgfsw', 'iofgd', 'yufdk', 'ujkdub', 'iofgdsk', 'dyghikg', 'ugdskf', 'ifwaih', 'oigsiu', 'yjksku', 'yfdkkrf', 'thjsqd', 'yjsyhf', 'ydjsu6', 'igseyf', 'ujudy8', 'tykde', 'ykmdi8', 'yklzrf', 'uijdkd', 'yjkshc', 'tkajc', 'ykdzs', 'jklsx', 'ejldux', 'ifxspo', 'ogsvtf', 'ifdeu', 'yudfdi', 'ofssj', 'igegkx', 'ugfkd', 'ugdsk', 'udskts', 'yjlkdss', 'fkdryl', 'rtuyjsr', 'tus56f', 'yjdsd', 'yuet6h', 'ugtw', 'tlkxt', 'yesrs', 'ykkds', 'yjksu', 'yhyshs', 'xdzfby', 'yujzdh', 'znfl', 'kjiud', 'shijuezhishi', 'hy1980boy', 'ww0304', 'ZXCASD854', 'zfpdh', 'batiyadh', 'yinsedh', 'yyfxz', 'bllpooe', 'joodfer', 'qdmang', 'chaenet', 'mzsyv', 'kzhaoes', 'clnnews', 'kendnes', 'hongnews', 'luokez', 'li721-LY', 'itunsr', 'cctnews', 'htmle', 'xmmj2', 'younownews', '445435213', 'seseClub', 'enewse', 'wsnewse', 'qsnews', 'soasmoughroy', 'adminewhat', 'wsermusic', 'molingfer', 'zhihues', '95movies', '99fuli', 'qnewse', 'tareres', 'hukioip', 'Hochoclate713', 'ervnme', 'greenleaf8888', '93-days', 'doubanm', 'xhydh', 'fvckslvt', 'MDCM-FB', 'b08240', 'm3u8-ekvod', 'huan768468', 'SweeOBC', 'ningmengsuan7788', 'supperqb', 'idskjs', 'ifsird', 'gklksr', 'ifsjxr', 'ifskxt', 'ghjklsd', 'udsskd', 'tgsjk', 'ihgsk', 'ujsjk', 'ijhdf', 'fghhgks', 'udfae4', 'jujwdj', 'ydsdk', 'uyfgsj', 'ykkxrd', 'branono', 'hytcd', 'kjiuo', 'SaolApp', 'lourv', 'uisdlk', 'hutuhai', 'dengminna', 'whmnoe4j', 'txy9704', 'ufsjl', 'udsks', 'uifsjk', 'ygsaj', 'udsts', 'yurdek', 'ghklsr', 'ifsnx', 'ufskd', 'yujst6', 'ifsurjn', 'saoyagma', 'yusyrdk', 'uijhgr', 'geeeeeeeek', 'gfjklk', 'uiskv', 'ccccsp', 'rrrsp', 'udjxs', 'qiezisp', 'egklkd', 't6korf', 'line915577', 'haijv', 'huaxinzhibo', 'haijiaofabuye', 'haijiaoshequ', 'HaijiaoCommunity', 'haijiao-app', 'fulibaike', 'lurmarp', 'entvasa', 'gotwib', 'hghkiiy121', 'gubcem', 'uijssu', 'yjhuk', 'yklsd', 'haijiaoWeb', 'winston779', 'tyukkst', 'ujsnmc', 'ygssk', 'igdkdy', 'qiezishiping', 'kjuhd', 'xiaogongzhuAPP', 'babyzhibo', 'yaojingzhibo', 'balizhibo', 'jiuaizhibo', 'liuyuezhibo', '69live', 'asidw', 'kuaimaoVIP', 'siguaha', 'mizhizhibo', 'lihzd', 'caomeizhibo', '36DAPP', 'luolisheApp', '69zhibo', 'jiejiezhibo', 'k8japan', 'buyaoshan', 'dk111222', 'fanbaovpn', 'HGcrowntiyu', '196tiyu', 'parryno', 'boyiscode', 'moonews', 'kim1528', 'tjqJ62cESiHPj6DdR6vXDAcPp', 'code-help-tutor', 'turbocanary','Ifem2BXvz4N4gh1gGn0bkR3Lp'
    ];

    function addBlockedNotice(num) {
        const resultsList = document.querySelector('div[data-testid="results-list"]');
        if (resultsList) {
            const notice = document.createElement('div');
            notice.style.cssText = 'text-align: center; padding: 10px; margin: 10px; background-color: #f9f9f9; border: 1px solid #e1e4e8;';
            notice.textContent = '已屏蔽 ' + num + ' 个垃圾';
            resultsList.appendChild(notice);
        }
    }

    function removeElementsWithUsername() {
        var removedNum = 0;
        const resultsList = document.querySelector('div[data-testid="results-list"]');
        if (resultsList) {
            // 修改此处 Selector
            const userElements = resultsList.querySelectorAll('.Box-sc-g0xbh4-0 .flszRz');
            let hasRemoved = false;
            userElements.forEach(element => {
                const usernameElement = element.querySelector('a[href^="/"]');
                if (usernameElement) {
                    const username = usernameElement.getAttribute('href').split('/')[1];
                    if (usernamesToRemove.includes(username)) {
                        element.remove();
                        hasRemoved = true;
                        removedNum += 1;
                    }
                }
            });
            if (hasRemoved) {
                addBlockedNotice(removedNum);
            }
        }
    }

    function observerCallback(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                removeElementsWithUsername();
            }
        }
    }

    const observer = new MutationObserver(observerCallback);

    function init() {
        const resultsList = document.querySelector('div[data-testid="results-list"]');
        if (resultsList) {
            removeElementsWithUsername();
            observer.observe(resultsList, {
                childList: true,
                subtree: true
            });
        }
    }

    // 尝试在页面加载后立即初始化
    window.onload = init;

    // 设置一个定时器，每2秒执行一次removeElementsWithUsername函数
    // setInterval(removeElementsWithUsername, 2000);

    // 对于动态内容，使用MutationObserver来持续监听DOM变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
