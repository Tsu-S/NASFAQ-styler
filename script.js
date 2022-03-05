function genCss() {
    /*getting color and url values*/
    var color1 = document.getElementById("values").elements[0].value;
    var color2 = document.getElementById("values").elements[1].value;
    var color3 = document.getElementById("values").elements[2].value;
    var backgroundurl = document.getElementById("values").elements[3].value;
    /*getting checkbox value*/
    var market = document.getElementById("styles").elements[0].checked;
    var activity = document.getElementById("styles").elements[1].checked;
    var floor = document.getElementById("styles").elements[2].checked;
    var info = document.getElementById("styles").elements[3].checked;
    var leaderboard = document.getElementById("styles").elements[4].checked;
    var supers = document.getElementById("styles").elements[5].checked;
    var benchmark = document.getElementById("styles").elements[6].checked;
    var gacha = document.getElementById("styles").elements[7].checked;
    var auctions = document.getElementById("styles").elements[8].checked;
    var profile = document.getElementById("styles").elements[9].checked;
    var betting = document.getElementById("styles").elements[10].checked;
    /*setting up variables*/
    var marketoutput = "";
    var activityoutput = "";
    var flooroutput = "";
    var infooutput = "";
    var lboutput = "";
    var supersoutput = "";
    var bmoutput = "";
    var gachaoutput = "";
    var auctionoutput = "";
    var profileoutput = "";
    var bettingoutput = "";
    var backgroundoutput = "";

    /*market page*/
    if (market == true) {
        marketoutput += "<b>/*Market*/</b>\n\n";
        marketoutput += "div.board-outer .compact-board-container::after {\n\tdisplay: none;\n}\n\n";
        marketoutput += "div.board-outer .compact-board-container table {\n\twidth: calc(100vw - 250px)\n}\n\n";
        marketoutput += ".dark div.coin-searchbar {\n\tbackground: rgba(46, 45, 49, 1);\n}\n\n";
        marketoutput += "div.board-outer .compact-board-container {\n\tpadding: 10px 40px 30px 40px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        marketoutput += ".dark .auto-trader-editor .auto-trader-inner {\n\tbackground: rgba(25, 25, 25, 1);\n}\n\n";
        marketoutput += ".dark div.board-outer .compact-board-container table th, .dark div.board-outer .compact-board-container table tr {\n\tbackground: none;\n}\n\n"
        
        if (color1.length > 0) {
            marketoutput += ".board-item-content {\n\tborder: 4px solid " + color1 + ";\n}\n\n";
            marketoutput += ".board-item-content .info-bar .name {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += ".toggle-outer .tp-switch-outer .tp-switch-circle {\n\tbackground: " + color1 + ";\n}\n\n";
            marketoutput += ".stats-container .stat-row .toggle-stat {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += "div.dropdown-selected {\n\tborder: 1px solid " + color1 + ";\n}\n\n";
            marketoutput += "div.coin-searchbar div.coin-searchbar-inner {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += "div.coin-searchbar div.coin-searchbar-inner .toggle-all-boards div {\n\tcolor: " + color1 + ";\n\tborder: 1px solid " + color1 + ";\n}\n\n";
            marketoutput += "div.coin-searchbar div.coin-searchbar-inner .apply-filter-outer .apply-filter-btn {\n\tborder: 1px solid " + color1 + ";\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += ".dark div.coin-searchbar div.coin-searchbar-inner .sort-method .sort-ordering {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += ".dark div.coin-searchbar div.coin-searchbar-inner .apply-filter-outer .toggle-compact {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += "div.coin-searchbar div.coin-searchbar-inner .toggle-auto-trader .toggle-auto-trader-button {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += ".auto-trader-editor .auto-trader-inner {\n\tborder: 2px solid " + color1 + ";\n}\n\n";
            marketoutput += ".trade-metrics span.trade-amount-quant {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += ".trade-countdown span.countdown-number {\n\tcolor: " + color1 + ";\n}\n\n";
            marketoutput += ".trade-rules-container .trader-controls .trader-actions .toggle-outer .tp-switch-circle {\n\tbackground: " + color1 + ";\n}\n\n";
            marketoutput += ".trade-rules-container .trader-controls .trader-coins .coin-outer .coin-owned-bubble {\n\tbackground: " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
                marketoutput += ".board-item .board-item-background {\n\tbackground: linear-gradient(135deg," + color1 + "," + color3 + ");\n}\n\n";
            }
        }
        if (color2.length > 0) {
            marketoutput += ".board-item-content .close-board {\n\tbackground: " + color2 + ";\n}\n\n";
            marketoutput += ".close-auto-trader {\n\tborder: 2px solid " + color2 + ";\n\tbackground: " + color2 + ";\n}\n\n";
        }
        if (color3.length > 0) {
            marketoutput += "div.coin-sidebar .coin-container.owned .coin::after {\n\tbackground: " + color3 + ";\n}\n\n";
            marketoutput += "div.coin-searchbar div.coin-searchbar-inner .toggle-all-boards div:hover {\n\tbackground: " + color3 + ";\n}\n\n";
            marketoutput += "div.coin-searchbar div.coin-searchbar-inner .apply-filter-outer .apply-filter-btn:hover {\n\tbackground: " + color3 + ";\n}\n\n";
            marketoutput += ".dark div.coin-searchbar div.coin-searchbar-inner .sort-method .sort-ordering:hover {\n\tcolor: " + color3 + ";\n}\n\n";
            marketoutput += ".dark div.coin-searchbar div.coin-searchbar-inner .apply-filter-outer .toggle-compact:hover {\n\tcolor: " + color3 + ";\n}\n\n";
            marketoutput += "div.coin-searchbar div.coin-searchbar-inner .toggle-auto-trader .toggle-auto-trader-button:hover {\n\tcolor: " + color3 + ";\n}\n\n";
        }
        
    }

    /*activity page*/
    if (activity == true) {
        activityoutput += "<b>/*Activity*/</b>\n\n";
        activityoutput += "div.tabbed-view-select {\n\tpadding: 40px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        if (color1.length > 0) {
            activityoutput += "div.tabbed-view-select .view-item.view-item-active::after, div.tabbed-view-select .view-item:hover::after {\n\tbackground: " + color1 + ";\n}\n\n";
            activityoutput += "div.tabbed-content .tabbed-content-container .tabbed-content-content {\n\tborder: 5px solid " + color1 + ";\n}\n\n";
            activityoutput += ".dark .transaction-container .transaction-name {\n\tcolor: " + color1 + ";\n}\n\n";
            activityoutput += ".dark div.pagenav .page-select.active-page, .dark div.pagenav .page-select:hover {\n\tborder-color: " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
                activityoutput += "div.tabbed-content .tabbed-content-container .tabbed-content-background {\n\tbackground: linear-gradient(135deg," + color1 * "," + color3 + ");\n}\n\n";
            }
        }
        if (color2.length > 0) {
            activityoutput += ".dark .date-updater-calendar .react-calendar__tile--active {\n\tbackground: " + color2 + ";\n}\n\n";
            activityoutput += "div.stat-details div.stat-detail span.stat-quant {\n\tcolor: " + color2 + ";\n}\n\n";
            activityoutput += "div.showing-active-coin .active-coin-label {\n\tcolor: "+ color2 + ";\n}\n\n";
        }
    }

    /*floor page*/
    if (floor == true) {
        flooroutput += "<b>/*Floor*/</b>\n\n";
        flooroutput += ".dark div.room-container,.dark div.room-select .room-item, .dark div.room-select .room-list-header {\n\tbackground: none;\n}\n\n";
        flooroutput += ".dark div.room-select{\n\tbackground: rgba(46, 45, 49, 1);\n}\n\n";
        if (color1.length > 0) {
            flooroutput += ".dark .toggle-message-input {\n\tcolor: " + color1 + ";\n}\n\n";
            flooroutput += ".submit-message-button {\n\tcolor: #E1D8EF;\n\tborder: 2px solid " + color1 + ";\n}\n\n";
            flooroutput += ".dark .submit-message-button:hover {\n\tcolor: " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
               flooroutput += ".dark .message.op {\n\tbackground: " + color3 + ";\n\tborder-color: " + color1 + ";\n}\n\n";
            }
            else {
                flooroutput += ".dark .message.op {\n\tborder-color: " + color1 + ";\n}\n\n";
            }
        }
        else if (color3.length > 0) {
            flooroutput += ".dark .message.op {\n\tbackground: " + color3 + ";\n}\n\n";
        }
        if (color3.length > 0) {
            flooroutput += ".dark div.room-select .room-item-select:hover {\n\tbackground: " + color3 + ";\n}\n\n";
            flooroutput += ".submit-message-button:hover {\n\tbackground: " + color3 + ";\n}\n\n";
        }
    }

    /*info page*/
    if (info == true) {
        infooutput += "<b>/*Info*/</b>\n\n";
        infooutput += "div.tabbed-view-select {\n\tpadding: 40px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        if (color1.length > 0) {
            infooutput += "div.tabbed-view-select .view-item.view-item-active::after, div.tabbed-view-select .view-item:hover::after {\n\tbackground: " + color1 + ";\n}\n\n";
            infooutput += ".container .container-content .container-section .section-content {\n\tborder: 5px solid " + color1 + ";\n}\n\n";
            infooutput += "div.nasfaq {\n\tcolor: " + color1 + ";\n}\n\n";
            infooutput += ".container .container-content p a {\n\tcolor: " + color1 + ";\n}\n\n";
            infooutput += ".dark li a {\n\tcolor: " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
                infooutput += ".container .container-content .container-section .section-background {\n\tbackground: linear-gradient(135deg," + color1 + "," + color3 + ");\n}\n\n";
                infooutput += ".container .container-content p span.code {\n\tbackground: " + color3 + ";\n\tcolor: " + color1 + ";\n}\n\n";
            }
            else {
                infooutput += ".container .container-content p span.code {\n\tcolor: " + color1 + ";\n}\n\n";
            }
        }  
        else if (color3.length > 0) {
            infooutput += ".container .container-content p span.code {\n\tbackground: " + color3 + ";\n}\n\n";
        } 
        if (color2.length > 0) {
            infooutput += ".dark .container .container-content p span.broker {\n\tcolor: " + color2 + ";\n}\n\n";
        }
    }

    /*leaderboard page*/
    if (leaderboard == true) {
        lboutput += "<b>/*Leaderboard*/</b>\n\n";
        if (color1.length > 0) {
            lboutput += "div.tabbed-view-select .view-item.view-item-active::after, div.tabbed-view-select .view-item:hover::after {\n\tbackground: " + color1 + ";\n}\n\n";
            lboutput += "div.tabbed-content .tabbed-content-container .tabbed-content-content {\n\tborder: 5px solid " + color1 + ";\n}\n\n";
            lboutput += ".dark input.text-input:focus {\n\tborder: 1px solid " + color1 + ";\n}\n\n";
            lboutput += ".filter-container .filter-container-2 .filter-button {\n\tborder-color: " + color1 + ";\n}\n\n";
            lboutput += ".toggle-outer .tp-switch-outer .tp-switch-circle {\n\tbackground: " + color1 + ";\n}\n\n";
            lboutput += ".dark div.pagenav .page-select.active-page, .dark div.pagenav .page-select:hover {\n\tborder-color: " + color1 + ";\n}\n\n";
            lboutput += ".dark div.user-rank-items div.items-inner .user-item .wallet-coin-amt, .dark div.user-rank-items div.items-inner .wallet-item .wallet-coin-amt, .dark div.user-rank-items div.wallet-inner .user-item .wallet-coin-amt, .dark div.user-rank-items div.wallet-inner .wallet-item .wallet-coin-amt, .dark div.user-rank-wallet div.items-inner .user-item .wallet-coin-amt, .dark div.user-rank-wallet div.items-inner .wallet-item .wallet-coin-amt, .dark div.user-rank-wallet div.wallet-inner .user-item .wallet-coin-amt, .dark div.user-rank-wallet div.wallet-inner .wallet-item .wallet-coin-amt {\n\tcolor: "+ color1 + ";\n}\n\n";
            lboutput += "div.user-rank-items div.items-inner .user-item, div.user-rank-items div.wallet-inner .user-item, div.user-rank-wallet div.items-inner .user-item, div.user-rank-wallet div.wallet-inner .user-item {\n\tborder: 2px solid " + color1 + ";\n}\n\n";
            lboutput += ".dark div.oshiboard-item .oshi-info .oshi-name {\n\tcolor: " + color1 + ";\n}\n\n";
            lboutput += ".benchmark-leaderboard-outer .benchmark-ranking .outperformers .benchmark-leaderboard-user .user-info .user-name, .benchmark-leaderboard-outer .benchmark-ranking .underperformers .benchmark-leaderboard-user .user-info .user-name {\n\tcolor: " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
                lboutput += "div.tabbed-content .tabbed-content-container .tabbed-content-background {\n\tbackground: linear-gradient(135deg," + color1 + "," + color3 + ");\n}\n\n"
            }
        }
        if (color2.length > 0) {
            lboutput += ".dark div.user-rank-items div.items-inner .item-statistics .item-stat-item span.stat-number, .dark div.user-rank-items div.items-inner .item-statistics .wallet-stat-item span.stat-number, .dark div.user-rank-items div.items-inner .wallet-statistics .item-stat-item span.stat-number, .dark div.user-rank-items div.items-inner .wallet-statistics .wallet-stat-item span.stat-number, .dark div.user-rank-items div.wallet-inner .item-statistics .item-stat-item span.stat-number, .dark div.user-rank-items div.wallet-inner .item-statistics .wallet-stat-item span.stat-number, .dark div.user-rank-items div.wallet-inner .wallet-statistics .item-stat-item span.stat-number, .dark div.user-rank-items div.wallet-inner .wallet-statistics .wallet-stat-item span.stat-number, .dark div.user-rank-wallet div.items-inner .item-statistics .item-stat-item span.stat-number, .dark div.user-rank-wallet div.items-inner .item-statistics .wallet-stat-item span.stat-number, .dark div.user-rank-wallet div.items-inner .wallet-statistics .item-stat-item span.stat-number, .dark div.user-rank-wallet div.items-inner .wallet-statistics .wallet-stat-item span.stat-number, .dark div.user-rank-wallet div.wallet-inner .item-statistics .item-stat-item span.stat-number, .dark div.user-rank-wallet div.wallet-inner .item-statistics .wallet-stat-item span.stat-number, .dark div.user-rank-wallet div.wallet-inner .wallet-statistics .item-stat-item span.stat-number, .dark div.user-rank-wallet div.wallet-inner .wallet-statistics .wallet-stat-item span.stat-number {\n\tcolor: " + color2 + ";\n}\n\n";
            lboutput += ".dark div.oshiboard-item span.oshi-stat {\n\tcolor: " + color2 + ";\n}\n\n";
        }
    }

    /*supers page*/
    if (supers == true) {
        supersoutput += "<b>/*Superchats*/</b>\n\n";
        supersoutput += ".superchats-billboard .superchat-settings {\n\tpadding: 10px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        supersoutput += ".superchats-billboard .superchats-view-select {\n\tpadding: 40px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        supersoutput += ".dark .superchats-billboard {\n\tbackground: none;\n}\n\n";
        supersoutput += ".dark .superchats-billboard .superchats-disclaimer {\n\tdisplay: none;\n}\n\n";
        supersoutput += ".sc-ranking-table td.table-spacer {\n\tdisplay: none;\n}\n\n";
        supersoutput += ".superchats-billboard .superchats-leaders {\n\tbackground-color: rgba(46, 45, 49, 1);\n\tpadding: 20px;\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        supersoutput += ".dark .superchat-item {\n\tbackground-color: rgba(46, 45, 49, 1);\n}\n\n";
        supersoutput += ".dark .superchat-item .superchat-list-container {\n\tbackground: rgba(25, 25, 25, 1);\n}\n\n";
        supersoutput += "table.superchat-feed{\n\tbackground-color: rgba(46, 45, 49, 1);\n\tmargin: 10px;\n\tpadding: 5px;\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 5px;\n}\n\n";
        supersoutput += ".sc-ranking-table {\n\tbackground-color: rgba(46, 45, 49, 1);\n\tpadding: 5px;\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 5px;\n}\n\n";
        if (color1.length > 0) {
            supersoutput += ".dark .superchats-billboard .superchats-title {\n\tcolor: " + color1 + ";\n}\n\n";
            supersoutput += ".dark .superchats-billboard .superchats-description {\n\tcolor: " + color1 + ";\n}\n\n";
            supersoutput += ".dark .superchats-billboard .superchats-leaders .top-donator-container .top-donator.first-donator {\n\tcolor: " + color1 + ";\n}\n\n";
            supersoutput += ".superchats-billboard .superchats-view-select .superchats-view-tab.active {\n\tborder-color: " + color1 + ";\n}\n\n";
            supersoutput += ".dark .sc-input-outer .sc-input-slider .slider-knob {\n\tbackground: " + color1 + ";\n}\n\n";
            supersoutput += ".sc-input-outer .sc-input-slider .slider-bar .slider-bar-inner .slider-fill {\n\tbackground: " + color1 + ";\n}\n\n";
            supersoutput += ".sc-ranking-table td.rank-title {\n\tcolor: " + color1 + "\n}\n\n";
            if (color3.length > 0) {
                supersoutput += ".superchats-billboard .superchats-leaders .top-earner .earner .earner-amt {\n\tcolor: " + color1 + ";\n\tbackground: " + color3 + ";\n}\n\n";
            }
            else {
                supersoutput += ".superchats-billboard .superchats-leaders .top-earner .earner .earner-amt {\n\tcolor: " + color1 + ";\n}\n\n";
            }
        } 
        else if (color3.length > 0) {
            supersoutput += ".superchats-billboard .superchats-leaders .top-earner .earner .earner-amt {\n\tbackground: " + color3 + ";\n}\n\n";
        }
        if (color3.length > 0) {
            supersoutput += ".sc-input-control-btn {\n\tcolor: #fff;\n\tbackground: " + color3 + ";\n}\n\n";
        }
    }

    /*benchmark page*/
    if (benchmark == true) {
        bmoutput += ".benchmark-weights .benchmark-weights-list {\n\tpadding: 40px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        bmoutput += ".dark .benchmark-weights .benchmark-weights-list table thead th, .dark .benchmark-weights .benchmark-weights-list table thead th::after {\n\tbackground: none;\n}\n\n";
        bmoutput += ".benchmark-weights .benchmark-weights-list table tbody .coin {\n\tz-index: 0;\n}\n\n";
        bmoutput += ".benchmark-weights .benchmark-weights-list table thead th {\n\tposition: static;\n}\n\n";
        if (color1.length > 0) {
            bmoutput += ".toggle-outer .tp-switch-outer .tp-switch-circle {\n\tbackground: " + color1 + ";\n}\n\n";
            bmoutput += ".benchmark-stats-outer .benchmark-stats .benchmark-stat-row .benchmark-stat-value, .dark .benchmark-weights .benchmark-weights-list table tbody th.gen-name, .dark .benchmark-weights .benchmark-weights-list table tbody .gen-member-stat.myweights, .benchmark-weights .benchmark-weights-list table tbody .gen-member-stat {\n\tcolor: " + color1 + "\n}\n\n";
            bmoutput += ".dark .benchmark-header .benchmark-title {\n\tbackground: " + color1 + ";\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n";
            if (color3.length > 0 ) {
                bmoutput += ".dark .benchmark-header {\n\tbackground: linear-gradient(146deg," + color1 + "," + color3 + ");\n}\n\n";
            }
        }
        if (color2.length > 0) {
            bmoutput += "@keyframes blink-stat-dark {\n\t0% {\n\t\tbackground: " + color2 + ";\n\t}\n}\n\n";
        }
    }

    /*gacha page*/
    if (gacha == true) {
        gachaoutput += "<b>/*Gacha*/</b>\n\n";
        gachaoutput += ".gachaboard-outer table, .dark .gacha-container .gacha-panel .button-row, .dark .gacha-container .drop-container {\n\tbackground-color: rgba(46, 45, 49, 1);\n\tpadding: 20px;\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        gachaoutput += ".dark .gacha-container .gacha-panel .button-row, .dark .gacha-container .drop-container {\n\tpadding-bottom: 50px;\n}\n\n";
        if (color1.length > 0) {
            gachaoutput += ".dark .gacha-container .gacha-header-container .gacha-header-inner .gacha-header-title {\n\tcolor: " + color1 + ";\n}\n\n";
            gachaoutput += ".dark .gacha-container .gacha-header-container .gacha-view-control .view-tab.view-tab-active::after {\n\tbackground: " + color1 + ";\n}\n\n";
            gachaoutput += ".dark .gacha-container .drop-container .drop-container-header {\n\tcolor: " + color1 + ";\n}\n\n";
            gachaoutput += ".dark .gacha-container .drop-container .drop-container-items .drop-item .drop-item-name {\n\tcolor: " + color1 + ";\n}\n\n";
            gachaoutput += ".dark .gachaboard-outer table td.gachaboard-username {\n\tcolor: " + color1 + ";\n}\n\n";
        }
    }

    /*auctions page*/
    if (auctions == true) {
        auctionoutput += "<b>/*Gacha*/</b>\n\n";
        auctionoutput += ".dark .auction-history table thead tr td {\n\tbackground: none;\n}\n\n";
        auctionoutput += ".dark .auction-history table {\n\tcolor: #fff;\n\tpadding: 40px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        auctionoutput += ".dark .create-auction-window {\n\tbackground: rgba(46, 45, 49, 1);\n}\n\n";
        if (color1.length > 0) {
            auctionoutput += ".create-auction-window .auction-item-select .auction-item-select-inner img:hover {\n\toutline: 2px solid " + color1 + ";\n}\n\n";
            auctionoutput += ".dark .create-auction-window .auction-item-input .expiration-outer input.expiration-time-input, div.dropdown-selected {\n\tborder: 1px solid " + color1 + ";\n}\n\n";
            auctionoutput += ".dark .create-auction-window .auction-item-input .minimum-bid input:focus-visible, .dark .create-auction-window .auction-item-input .sell-quantity input:focus-visible, .dark .auction-detail-container .auction-detail-outer .auction-actions .auction-bid-container input:focus, .dark .auction-detail-container .auction-detail-outer .auction-actions .auction-message-container input:focus {\n\toutline: 1px solid " + color1 + ";\n}\n\n";
            auctionoutput += ".auction-info .auction-info-header {\n\tborder-bottom: 1px solid " + color1 + ";\n}\n\n";
            auctionoutput += ".dark .auction-info {\n\tborder-color: " + color1 + ";\n}\n\n";
            auctionoutput += ".dark .auction-container .auction-preview {\n\tborder: 3px solid #E1D8EF;\n}\n\n";
            auctionoutput += ".dark .auction-container .auction-preview .auction-preview-info .auction-preview-info-name a:hover, .dark .auction-detail-container .auction-detail-outer .auction-actions .auction-log .auction-log-item span.auction-log-username, .highlight, .dark .auction-detail-container .auction-detail-outer .auction-actions .last-outbid-bidder {\n\tcolor: " + color1 + ";\n}\n\n";
            auctionoutput += ".dark .auction-detail-container .auction-detail-outer, .dark .auction-detail-container .auction-detail-outer .auction-item-info .auction-item-image .auction-item-image-container, .dark .auction-detail-container .auction-detail-outer .auction-item-info .auction-item-image .auction-item-quantity {\n\tborder: 4px solid " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
                auctionoutput += ".dark .auction-detail-container .auction-background {\n\tbackground: linear-gradient(135deg," + color1 + "," + color3 + ");\n}\n\n";
            }
        }
        if (color2.length > 0) {
            auctionoutput += ".dark .date-updater-calendar .react-calendar__tile--active {\n\tbackground: " + color2 + ";\n}\n\n";
            auctionoutput +~ ".dark .auction-filter-controls .auction-filter-control-row .checkbox {\n\tborder: 3px solid " + color2 + ";\n}\n\n";
            auctionoutput += ".dark .auction-filter-controls .auction-filter-control-row .checkbox.active,  .dark .auction-filters .add-auction-button:hover, .dark .auction-filters .buy-auction-license-button:hover, .dark .auction-filters .toggle-filters-button:hover {\n\tbackground: " + color2 + ";\n}\n\n";
            auctionoutput += ".dark .auction-detail-container .auction-detail-outer .auction-actions .bid-metrics .remaining-time, .dark .auction-detail-container .auction-detail-outer .auction-item-info .auction-item-image .auction-item-quantity, .dark .auction-detail-container .auction-detail-outer .auction-actions .current-bid-bidder {\n\tcolor: " + color2 + ";\n}\n\n";
        }
        if (color3.length > 0) {
            auctionoutput += ".dark .auction-filter-controls .auction-filter-control-row .item-select:hover, div.dropdown-option:hover, .dark .auction-filter-controls .auction-filter-control-row .auction-control-button:hover, .dark .auction-filters .add-auction-button, .dark .auction-filters .buy-auction-license-button, .dark .auction-filters .toggle-filters-button, .auction-detail-container .auction-detail-outer .auction-item-info .auction-item-image, .dark .auction-detail-container .auction-detail-outer .auction-actions .auction-bid-container .send-message-btn, .dark .auction-detail-container .auction-detail-outer .auction-actions .auction-bid-container .submit-bid, .dark .auction-detail-container .auction-detail-outer .auction-actions .auction-message-container .send-message-btn, .dark .auction-detail-container .auction-detail-outer .auction-actions .auction-message-container .submit-bid {\n\tbackground: " + color3 + ";\n}\n\n";
        }
    }
    
    /*profile page*/
    if (profile == true) {
        profileoutput += "<b>/*Profile*/</b>\n\n";
        profileoutput += ".profile-view-select {\n\tpadding: 40px;\n\tbackground-color: rgba(46, 45, 49, 1);\n\tbox-shadow: 0 7px 20px -6px #000;\n\tborder: 1px solid #4b4b4b;\n\tborder-radius: 10px;\n}\n\n";
        if (color1.length > 0) {
            profileoutput += ".profile-view-select .profile-view-tab.active::after {\n\tbackground: " + color1 + ";\n}\n\n";
            profileoutput += ".container .container-content .container-section .section-content {\n\tborder: 5px solid " + color1 + ";\n}\n\n";
            profileoutput += ".dark div.reset-password a {\n\tcolor: " + color1 + ";\n}\n\n"
            profileoutput += ".dark .crafting-outer .item-select, .dark .crafting-outer .item-select .user-item {\n\tborder-color: " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
                profileoutput += ".container .container-content .container-section .section-background {\n\tbackground: linear-gradient(135deg," + color1 + "," + color3 + ");\n}\n\n";
            }
        }
        if (color2.length > 0) {
            profileoutput += ".crafting-outer .item-select .user-item:hover {\n\toutline: 2px solid " + color2 + ";\n}\n\n";
            profileoutput += ".dark .direct-messages-outer .dm-side-panel .new-conversation .send-new-convo .new-convo-btn, .dark .direct-messages-outer .dm-main-panel .dm-header .block-toggle .block-toggle-btn.blocking {\n\tbackground: " + color2 + ";\n}\n\n";
            profileoutput += ".dark .direct-messages-outer .dm-main-panel .dm-header .block-toggle .block-toggle-btn {\n\tborder-color: " + color2 + ";\n}\n\n";
        }
        if (color3.length > 0) {
            profileoutput += ".dark .direct-messages-outer .dm-side-panel .new-conversation .send-new-convo .new-convo-btn:hover, .dark .direct-messages-outer .dm-main-panel .dm-input .send-dm .send-dm-btn:hover {\n\tbackground: " + color3 + ";\n}\n\n";
        }
    }

    /*betting page*/
    if (betting == true) {
        bettingoutput += "<b>/*Betting*/</b>\n\n";
        if (color1.length > 0) {
            bettingoutput += ".betting-container .betting-pools-container .betting-pool-item .betting-pool-content .betting-pool-information .betting-pool-total-betters span.bet-amt {\n\tcolor: " + color1 + "\n}\n\n";
            bettingoutput += ".dark .betting-container .betting-pools-container .betting-pool-item .betting-pool-content .betting-pool-options .betting-pool-options-container .betting-pool-option {\n\tborder-color: " + color1 + ";\n\tcolor: " + color1 + ";\n}\n\n";
            bettingoutput += ".dark .betting-container .betting-pools-container .betting-pool-item .betting-pool-content {\n\tborder: 2px solid " + color1 + ";\n}\n\n";
            bettingoutput += ".dark .betting-pool-container .betting-pool-content .betting-pool-options .betting-pool-option-container .betting-pool-option-row .option-description .option-description-content, .betting-pool-container .betting-pool-content .betting-pool-information .pool-total-betters, .betting-pool-container .betting-pool-content .betting-pool-information .prompt-place-bet {\n\tcolor: " + color1 + ";\n}\n\n";
            bettingoutput += ".betting-pool-container .betting-pool-content .betting-pool-options .betting-pool-option-container .betting-pool-option-row .option-description {\n\tborder: 2px solid " + color1 + ";\n}\n\n";
            bettingoutput += ".dark .betting-pool-container .betting-pool-header a .back-betting:hover {\n\tbackground: " + color1 + ";\n}\n\n";
            if (color3.length > 0) {
                bettingoutput += ".betting-container .betting-pools-container .betting-pool-item .betting-pool-background {\n\tbackground: linear-gradient(135deg," + color1 + "," + color3 + ");\n}\n\n";
                bettingoutput += ".betting-container .betting-container-header .betting-header-inner {\n\tbackground: " + color3 + ";\n\tcolor: " + color1 + ";\n}\n\n";
                bettingoutput += ".dark .betting-pool-container .betting-pool-header {\n\tcolor: " + color1 + ";\n\tbackground: " + color3 + ";\n\tborder-bottom: 2px solid " + color1 + ";\n}\n\n";
            }
            else {
                bettingoutput += ".betting-container .betting-container-header .betting-header-inner {\n\tcolor: " + color1 + ";\n}\n\n";
                bettingoutput += ".dark .betting-pool-container .betting-pool-header {\n\tcolor: " + color1 + ";\n\tborder-bottom: 2px solid " + color1 + ";\n}\n\n"; 
            }
        }
        else if (color3.length > 0) {
            bettingoutput += ".betting-container .betting-container-header .betting-header-inner {\n\tbackground: " + color3 + ";;\n}\n\n";
            bettingoutput += ".dark .betting-pool-container .betting-pool-header {\n\tbackground: " + color3 + ";\n}\n\n";
        }
        if (color2.length > 0) {
            bettingoutput += ".betting-pool-container .betting-pool-content .betting-pool-options .betting-pool-option-container .betting-pool-option-row .option-description .option-description-background, .dark .betting-pool-container .betting-pool-header a .back-betting, .betting-pool-container .betting-pool-content .betting-pool-options .betting-pool-option-container .betting-pool-option-row .option-description:hover {\n\tbackground: " + color2 + ";\n}\n\n";
        }
    }
    /*background url*/
    if (backgroundurl.length > 0) {
        backgroundoutput += "<b>/*Background URL*/</b>\n\n.dark .container {\n\tbackground-image: url(" + backgroundurl + ");\n\tmax-width: 100%;\n\theight: calc(100vh - 4.5rem)\n}";
    }

    var output = marketoutput + activityoutput + flooroutput + infooutput + lboutput + supersoutput + bmoutput + gachaoutput + auctionoutput + profileoutput + bettingoutput + backgroundoutput;
    document.getElementById("gencss").innerHTML = output;
}
