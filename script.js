const request = new XMLHttpRequest();
request.open("get", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].name.common);
    console.log(data[i].flags);
    console.log(data[i].region);
    console.log(data[i].subregion);
    console.log(data[i].population);
  }
};
// output:
// script.js:11 Middle Africa
// script.js:12 219161
// script.js:8 Switzerland
// script.js:9 {png: 'https://flagcdn.com/w320/ch.png', svg: 'https://flagcdn.com/ch.svg'}
// script.js:10 Europe
// script.js:11 Western Europe
// script.js:12 8654622
// script.js:8 San Marino
// script.js:9 {png: 'https://flagcdn.com/w320/sm.png', svg: 'https://flagcdn.com/sm.svg'}
// script.js:10 Europe
// script.js:11 Southern Europe
// script.js:12 33938
// script.js:8 Eswatini
// script.js:9 {png: 'https://flagcdn.com/w320/sz.png', svg: 'https://flagcdn.com/sz.svg'}
// script.js:10 Africa
// script.js:11 Southern Africa
// script.js:12 1160164
// script.js:8 Saint Vincent and the Grenadines
// script.js:9 {png: 'https://flagcdn.com/w320/vc.png', svg: 'https://flagcdn.com/vc.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 110947
// script.js:8 Malaysia
// script.js:9 {png: 'https://flagcdn.com/w320/my.png', svg: 'https://flagcdn.com/my.svg'}
// script.js:10 Asia
// script.js:11 South-Eastern Asia
// script.js:12 32365998
// script.js:8 Germany
// script.js:9 {png: 'https://flagcdn.com/w320/de.png', svg: 'https://flagcdn.com/de.svg'}
// script.js:10 Europe
// script.js:11 Western Europe
// script.js:12 83240525
// script.js:8 Poland
// script.js:9 {png: 'https://flagcdn.com/w320/pl.png', svg: 'https://flagcdn.com/pl.svg'}
// script.js:10 Europe
// script.js:11 Central Europe
// script.js:12 37950802
// script.js:8 Grenada
// script.js:9 {png: 'https://flagcdn.com/w320/gd.png', svg: 'https://flagcdn.com/gd.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 112519
// script.js:8 South Sudan
// script.js:9 {png: 'https://flagcdn.com/w320/ss.png', svg: 'https://flagcdn.com/ss.svg'}
// script.js:10 Africa
// script.js:11 Middle Africa
// script.js:12 11193729
// script.js:8 Belgium
// script.js:9 {png: 'https://flagcdn.com/w320/be.png', svg: 'https://flagcdn.com/be.svg'}
// script.js:10 Europe
// script.js:11 Western Europe
// script.js:12 11555997
// script.js:8 Cambodia
// script.js:9 {png: 'https://flagcdn.com/w320/kh.png', svg: 'https://flagcdn.com/kh.svg'}
// script.js:10 Asia
// script.js:11 South-Eastern Asia
// script.js:12 16718971
// script.js:8 Sri Lanka
// script.js:9 {png: 'https://flagcdn.com/w320/lk.png', svg: 'https://flagcdn.com/lk.svg'}
// script.js:10 Asia
// script.js:11 Southern Asia
// script.js:12 21919000
// script.js:8 Ivory Coast
// script.js:9 {png: 'https://flagcdn.com/w320/ci.png', svg: 'https://flagcdn.com/ci.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 26378275
// script.js:8 Ghana
// script.js:9 {png: 'https://flagcdn.com/w320/gh.png', svg: 'https://flagcdn.com/gh.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 31072945
// script.js:8 Eritrea
// script.js:9 {png: 'https://flagcdn.com/w320/er.png', svg: 'https://flagcdn.com/er.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 5352000
// script.js:8 Belize
// script.js:9 {png: 'https://flagcdn.com/w320/bz.png', svg: 'https://flagcdn.com/bz.svg'}
// script.js:10 Americas
// script.js:11 Central America
// script.js:12 397621
// script.js:8 Christmas Island
// script.js:9 {png: 'https://flagcdn.com/w320/cx.png', svg: 'https://flagcdn.com/cx.svg'}
// script.js:10 Oceania
// script.js:11 Australia and New Zealand
// script.js:12 2072
// script.js:8 Equatorial Guinea
// script.js:9 {png: 'https://flagcdn.com/w320/gq.png', svg: 'https://flagcdn.com/gq.svg'}
// script.js:10 Africa
// script.js:11 Middle Africa
// script.js:12 1402985
// script.js:8 Trinidad and Tobago
// script.js:9 {png: 'https://flagcdn.com/w320/tt.png', svg: 'https://flagcdn.com/tt.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 1399491
// script.js:8 Cook Islands
// script.js:9 {png: 'https://flagcdn.com/w320/ck.png', svg: 'https://flagcdn.com/ck.svg'}
// script.js:10 Oceania
// script.js:11 Polynesia
// script.js:12 18100
// script.js:8 Mali
// script.js:9 {png: 'https://flagcdn.com/w320/ml.png', svg: 'https://flagcdn.com/ml.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 20250834
// script.js:8 Saint Helena, Ascension and Tristan da Cunha
// script.js:9 {png: 'https://flagcdn.com/w320/sh.png', svg: 'https://flagcdn.com/sh.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 53192
// script.js:8 Cocos (Keeling) Islands
// script.js:9 {png: 'https://flagcdn.com/w320/cc.png', svg: 'https://flagcdn.com/cc.svg'}
// script.js:10 Oceania
// script.js:11 Australia and New Zealand
// script.js:12 544
// script.js:8 Mozambique
// script.js:9 {png: 'https://flagcdn.com/w320/mz.png', svg: 'https://flagcdn.com/mz.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 31255435
// script.js:8 Iran
// script.js:9 {png: 'https://flagcdn.com/w320/ir.png', svg: 'https://flagcdn.com/ir.svg'}
// script.js:10 Asia
// script.js:11 Southern Asia
// script.js:12 83992953
// script.js:8 DR Congo
// script.js:9 {png: 'https://flagcdn.com/w320/cd.png', svg: 'https://flagcdn.com/cd.svg'}
// script.js:10 Africa
// script.js:11 Middle Africa
// script.js:12 108407721
// script.js:8 Palau
// script.js:9 {png: 'https://flagcdn.com/w320/pw.png', svg: 'https://flagcdn.com/pw.svg'}
// script.js:10 Oceania
// script.js:11 Micronesia
// script.js:12 18092
// script.js:8 Maldives
// script.js:9 {png: 'https://flagcdn.com/w320/mv.png', svg: 'https://flagcdn.com/mv.svg'}
// script.js:10 Asia
// script.js:11 Southern Asia
// script.js:12 540542
// script.js:8 Benin
// script.js:9 {png: 'https://flagcdn.com/w320/bj.png', svg: 'https://flagcdn.com/bj.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 12123198
// script.js:8 Jordan
// script.js:9 {png: 'https://flagcdn.com/w320/jo.png', svg: 'https://flagcdn.com/jo.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 10203140
// script.js:8 Monaco
// script.js:9 {png: 'https://flagcdn.com/w320/mc.png', svg: 'https://flagcdn.com/mc.svg'}
// script.js:10 Europe
// script.js:11 Western Europe
// script.js:12 39244
// script.js:8 Mauritania
// script.js:9 {png: 'https://flagcdn.com/w320/mr.png', svg: 'https://flagcdn.com/mr.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 4649660
// script.js:8 Czechia
// script.js:9 {png: 'https://flagcdn.com/w320/cz.png', svg: 'https://flagcdn.com/cz.svg'}
// script.js:10 Europe
// script.js:11 Central Europe
// script.js:12 10698896
// script.js:8 Belarus
// script.js:9 {png: 'https://flagcdn.com/w320/by.png', svg: 'https://flagcdn.com/by.svg'}
// script.js:10 Europe
// script.js:11 Eastern Europe
// script.js:12 9398861
// script.js:8 Albania
// script.js:9 {png: 'https://flagcdn.com/w320/al.png', svg: 'https://flagcdn.com/al.svg'}
// script.js:10 Europe
// script.js:11 Southeast Europe
// script.js:12 2837743
// script.js:8 Malawi
// script.js:9 {png: 'https://flagcdn.com/w320/mw.png', svg: 'https://flagcdn.com/mw.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 19129955
// script.js:8 Somalia
// script.js:9 {png: 'https://flagcdn.com/w320/so.png', svg: 'https://flagcdn.com/so.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 15893219
// script.js:8 Serbia
// script.js:9 {png: 'https://flagcdn.com/w320/rs.png', svg: 'https://flagcdn.com/rs.svg'}
// script.js:10 Europe
// script.js:11 Southeast Europe
// script.js:12 6908224
// script.js:8 Iceland
// script.js:9 {png: 'https://flagcdn.com/w320/is.png', svg: 'https://flagcdn.com/is.svg'}
// script.js:10 Europe
// script.js:11 Northern Europe
// script.js:12 366425
// script.js:8 Samoa
// script.js:9 {png: 'https://flagcdn.com/w320/ws.png', svg: 'https://flagcdn.com/ws.svg'}
// script.js:10 Oceania
// script.js:11 Polynesia
// script.js:12 198410
// script.js:8 Myanmar
// script.js:9 {png: 'https://flagcdn.com/w320/mm.png', svg: 'https://flagcdn.com/mm.svg'}
// script.js:10 Asia
// script.js:11 South-Eastern Asia
// script.js:12 54409794
// script.js:8 Thailand
// script.js:9 {png: 'https://flagcdn.com/w320/th.png', svg: 'https://flagcdn.com/th.svg'}
// script.js:10 Asia
// script.js:11 South-Eastern Asia
// script.js:12 69799978
// script.js:8 Lebanon
// script.js:9 {png: 'https://flagcdn.com/w320/lb.png', svg: 'https://flagcdn.com/lb.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 6825442
// script.js:8 Latvia
// script.js:9 {png: 'https://flagcdn.com/w320/lv.png', svg: 'https://flagcdn.com/lv.svg'}
// script.js:10 Europe
// script.js:11 Northern Europe
// script.js:12 1901548
// script.js:8 Kazakhstan
// script.js:9 {png: 'https://flagcdn.com/w320/kz.png', svg: 'https://flagcdn.com/kz.svg'}
// script.js:10 Asia
// script.js:11 Central Asia
// script.js:12 18754440
// script.js:8 Martinique
// script.js:9 {png: 'https://flagcdn.com/w320/mq.png', svg: 'https://flagcdn.com/mq.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 378243
// script.js:8 Pitcairn Islands
// script.js:9 {png: 'https://flagcdn.com/w320/pn.png', svg: 'https://flagcdn.com/pn.svg'}
// script.js:10 Oceania
// script.js:11 Polynesia
// script.js:12 56
// script.js:8 Tuvalu
// script.js:9 {png: 'https://flagcdn.com/w320/tv.png', svg: 'https://flagcdn.com/tv.svg'}
// script.js:10 Oceania
// script.js:11 Polynesia
// script.js:12 11792
// script.js:8 Hungary
// script.js:9 {png: 'https://flagcdn.com/w320/hu.png', svg: 'https://flagcdn.com/hu.svg'}
// script.js:10 Europe
// script.js:11 Central Europe
// script.js:12 9749763
// script.js:8 Svalbard and Jan Mayen
// script.js:9 {png: 'https://flagcdn.com/w320/sj.png', svg: 'https://flagcdn.com/sj.svg'}
// script.js:10 Europe
// script.js:11 Northern Europe
// script.js:12 2562
// script.js:8 Comoros
// script.js:9 {png: 'https://flagcdn.com/w320/km.png', svg: 'https://flagcdn.com/km.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 869595
// script.js:8 Israel
// script.js:9 {png: 'https://flagcdn.com/w320/il.png', svg: 'https://flagcdn.com/il.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 9216900
// script.js:8 Sudan
// script.js:9 {png: 'https://flagcdn.com/w320/sd.png', svg: 'https://flagcdn.com/sd.svg'}
// script.js:10 Africa
// script.js:11 Northern Africa
// script.js:12 43849269
// script.js:8 Armenia
// script.js:9 {png: 'https://flagcdn.com/w320/am.png', svg: 'https://flagcdn.com/am.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 2963234
// script.js:8 Uruguay
// script.js:9 {png: 'https://flagcdn.com/w320/uy.png', svg: 'https://flagcdn.com/uy.svg'}
// script.js:10 Americas
// script.js:11 South America
// script.js:12 3473727
// script.js:8 British Virgin Islands
// script.js:9 {png: 'https://flagcdn.com/w320/vg.png', svg: 'https://flagcdn.com/vg.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 30237
// script.js:8 Saudi Arabia
// script.js:9 {png: 'https://flagcdn.com/w320/sa.png', svg: 'https://flagcdn.com/sa.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 34813867
// script.js:8 Dominica
// script.js:9 {png: 'https://flagcdn.com/w320/dm.png', svg: 'https://flagcdn.com/dm.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 71991
// script.js:8 Tokelau
// script.js:9 {png: 'https://flagcdn.com/w320/tk.png', svg: 'https://flagcdn.com/tk.svg'}
// script.js:10 Oceania
// script.js:11 Polynesia
// script.js:12 1411
// script.js:8 Burundi
// script.js:9 {png: 'https://flagcdn.com/w320/bi.png', svg: 'https://flagcdn.com/bi.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 11890781
// script.js:8 Ukraine
// script.js:9 {png: 'https://flagcdn.com/w320/ua.png', svg: 'https://flagcdn.com/ua.svg'}
// script.js:10 Europe
// script.js:11 Eastern Europe
// script.js:12 44134693
// script.js:8 Austria
// script.js:9 {png: 'https://flagcdn.com/w320/at.png', svg: 'https://flagcdn.com/at.svg'}
// script.js:10 Europe
// script.js:11 Central Europe
// script.js:12 8917205
// script.js:8 Sierra Leone
// script.js:9 {png: 'https://flagcdn.com/w320/sl.png', svg: 'https://flagcdn.com/sl.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 7976985
// script.js:8 Bermuda
// script.js:9 {png: 'https://flagcdn.com/w320/bm.png', svg: 'https://flagcdn.com/bm.svg'}
// script.js:10 Americas
// script.js:11 North America
// script.js:12 63903
// script.js:8 Namibia
// script.js:9 {png: 'https://flagcdn.com/w320/na.png', svg: 'https://flagcdn.com/na.svg'}
// script.js:10 Africa
// script.js:11 Southern Africa
// script.js:12 2540916
// script.js:8 Netherlands
// script.js:9 {png: 'https://flagcdn.com/w320/nl.png', svg: 'https://flagcdn.com/nl.svg'}
// script.js:10 Europe
// script.js:11 Western Europe
// script.js:12 16655799
// script.js:8 Kosovo
// script.js:9 {png: 'https://flagcdn.com/w320/xk.png', svg: 'https://flagcdn.com/xk.svg'}
// script.js:10 Europe
// script.js:11 Southeast Europe
// script.js:12 1775378
// script.js:8 Haiti
// script.js:9 {png: 'https://flagcdn.com/w320/ht.png', svg: 'https://flagcdn.com/ht.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 11402533
// script.js:8 Spain
// script.js:9 {png: 'https://flagcdn.com/w320/es.png', svg: 'https://flagcdn.com/es.svg'}
// script.js:10 Europe
// script.js:11 Southern Europe
// script.js:12 47351567
// script.js:8 Ireland
// script.js:9 {png: 'https://flagcdn.com/w320/ie.png', svg: 'https://flagcdn.com/ie.svg'}
// script.js:10 Europe
// script.js:11 Northern Europe
// script.js:12 4994724
// script.js:8 Libya
// script.js:9 {png: 'https://flagcdn.com/w320/ly.png', svg: 'https://flagcdn.com/ly.svg'}
// script.js:10 Africa
// script.js:11 Northern Africa
// script.js:12 6871287
// script.js:8 Papua New Guinea
// script.js:9 {png: 'https://flagcdn.com/w320/pg.png', svg: 'https://flagcdn.com/pg.svg'}
// script.js:10 Oceania
// script.js:11 Melanesia
// script.js:12 8947027
// script.js:8 Saint Lucia
// script.js:9 {png: 'https://flagcdn.com/w320/lc.png', svg: 'https://flagcdn.com/lc.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 183629
// script.js:8 Norfolk Island
// script.js:9 {png: 'https://flagcdn.com/w320/nf.png', svg: 'https://flagcdn.com/nf.svg'}
// script.js:10 Oceania
// script.js:11 Australia and New Zealand
// script.js:12 2302
// script.js:8 Angola
// script.js:9 {png: 'https://flagcdn.com/w320/ao.png', svg: 'https://flagcdn.com/ao.svg'}
// script.js:10 Africa
// script.js:11 Middle Africa
// script.js:12 32866268
// script.js:8 Indonesia
// script.js:9 {png: 'https://flagcdn.com/w320/id.png', svg: 'https://flagcdn.com/id.svg'}
// script.js:10 Asia
// script.js:11 South-Eastern Asia
// script.js:12 273523621
// script.js:8 Norway
// script.js:9 {png: 'https://flagcdn.com/w320/no.png', svg: 'https://flagcdn.com/no.svg'}
// script.js:10 Europe
// script.js:11 Northern Europe
// script.js:12 5379475
// script.js:8 Argentina
// script.js:9 {png: 'https://flagcdn.com/w320/ar.png', svg: 'https://flagcdn.com/ar.svg'}
// script.js:10 Americas
// script.js:11 South America
// script.js:12 45376763
// script.js:8 Panama
// script.js:9 {png: 'https://flagcdn.com/w320/pa.png', svg: 'https://flagcdn.com/pa.svg'}
// script.js:10 Americas
// script.js:11 Central America
// script.js:12 4314768
// script.js:8 Japan
// script.js:9 {png: 'https://flagcdn.com/w320/jp.png', svg: 'https://flagcdn.com/jp.svg'}
// script.js:10 Asia
// script.js:11 Eastern Asia
// script.js:12 125836021
// script.js:8 El Salvador
// script.js:9 {png: 'https://flagcdn.com/w320/sv.png', svg: 'https://flagcdn.com/sv.svg'}
// script.js:10 Americas
// script.js:11 Central America
// script.js:12 6486201
// script.js:8 Andorra
// script.js:9 {png: 'https://flagcdn.com/w320/ad.png', svg: 'https://flagcdn.com/ad.svg'}
// script.js:10 Europe
// script.js:11 Southern Europe
// script.js:12 77265
// script.js:8 Niger
// script.js:9 {png: 'https://flagcdn.com/w320/ne.png', svg: 'https://flagcdn.com/ne.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 24206636
// script.js:8 Nicaragua
// script.js:9 {png: 'https://flagcdn.com/w320/ni.png', svg: 'https://flagcdn.com/ni.svg'}
// script.js:10 Americas
// script.js:11 Central America
// script.js:12 6624554
// script.js:8 Wallis and Futuna
// script.js:9 {png: 'https://flagcdn.com/w320/wf.png', svg: 'https://flagcdn.com/wf.svg'}
// script.js:10 Oceania
// script.js:11 Polynesia
// script.js:12 11750
// script.js:8 Italy
// script.js:9 {png: 'https://flagcdn.com/w320/it.png', svg: 'https://flagcdn.com/it.svg'}
// script.js:10 Europe
// script.js:11 Southern Europe
// script.js:12 59554023
// script.js:8 Saint Pierre and Miquelon
// script.js:9 {png: 'https://flagcdn.com/w320/pm.png', svg: 'https://flagcdn.com/pm.svg'}
// script.js:10 Americas
// script.js:11 North America
// script.js:12 6069
// script.js:8 Guinea-Bissau
// script.js:9 {png: 'https://flagcdn.com/w320/gw.png', svg: 'https://flagcdn.com/gw.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 1967998
// script.js:8 Tanzania
// script.js:9 {png: 'https://flagcdn.com/w320/tz.png', svg: 'https://flagcdn.com/tz.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 59734213
// script.js:8 Slovakia
// script.js:9 {png: 'https://flagcdn.com/w320/sk.png', svg: 'https://flagcdn.com/sk.svg'}
// script.js:10 Europe
// script.js:11 Central Europe
// script.js:12 5458827
// script.js:8 French Southern and Antarctic Lands
// script.js:9 {png: 'https://flagcdn.com/w320/tf.png', svg: 'https://flagcdn.com/tf.svg'}
// script.js:10 Antarctic
// script.js:11 undefined
// script.js:12 400
// script.js:8 Finland
// script.js:9 {png: 'https://flagcdn.com/w320/fi.png', svg: 'https://flagcdn.com/fi.svg'}
// script.js:10 Europe
// script.js:11 Northern Europe
// script.js:12 5530719
// script.js:8 Liechtenstein
// script.js:9 {png: 'https://flagcdn.com/w320/li.png', svg: 'https://flagcdn.com/li.svg'}
// script.js:10 Europe
// script.js:11 Western Europe
// script.js:12 38137
// script.js:8 Tajikistan
// script.js:9 {png: 'https://flagcdn.com/w320/tj.png', svg: 'https://flagcdn.com/tj.svg'}
// script.js:10 Asia
// script.js:11 Central Asia
// script.js:12 9537642
// script.js:8 Guatemala
// script.js:9 {png: 'https://flagcdn.com/w320/gt.png', svg: 'https://flagcdn.com/gt.svg'}
// script.js:10 Americas
// script.js:11 Central America
// script.js:12 16858333
// script.js:8 Turks and Caicos Islands
// script.js:9 {png: 'https://flagcdn.com/w320/tc.png', svg: 'https://flagcdn.com/tc.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 38718
// script.js:8 Antarctica
// script.js:9 {png: 'https://flagcdn.com/w320/aq.png', svg: 'https://flagcdn.com/aq.svg'}
// script.js:10 Antarctic
// script.js:11 undefined
// script.js:12 1000
// script.js:8 Bahrain
// script.js:9 {png: 'https://flagcdn.com/w320/bh.png', svg: 'https://flagcdn.com/bh.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 1701583
// script.js:8 Madagascar
// script.js:9 {png: 'https://flagcdn.com/w320/mg.png', svg: 'https://flagcdn.com/mg.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 27691019
// script.js:8 Western Sahara
// script.js:9 {png: 'https://flagcdn.com/w320/eh.png', svg: 'https://flagcdn.com/eh.svg'}
// script.js:10 Africa
// script.js:11 Northern Africa
// script.js:12 510713
// script.js:8 Micronesia
// script.js:9 {png: 'https://flagcdn.com/w320/fm.png', svg: 'https://flagcdn.com/fm.svg'}
// script.js:10 Oceania
// script.js:11 Micronesia
// script.js:12 115021
// script.js:8 South Africa
// script.js:9 {png: 'https://flagcdn.com/w320/za.png', svg: 'https://flagcdn.com/za.svg'}
// script.js:10 Africa
// script.js:11 Southern Africa
// script.js:12 59308690
// script.js:8 Caribbean Netherlands
// script.js:9 {png: 'https://flagcdn.com/w320/bq.png', svg: 'https://flagcdn.com/bq.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 25987
// script.js:8 Djibouti
// script.js:9 {png: 'https://flagcdn.com/w320/dj.png', svg: 'https://flagcdn.com/dj.svg'}
// script.js:10 Africa
// script.js:11 Eastern Africa
// script.js:12 988002
// script.js:8 Senegal
// script.js:9 {png: 'https://flagcdn.com/w320/sn.png', svg: 'https://flagcdn.com/sn.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 16743930
// script.js:8 Gambia
// script.js:9 {png: 'https://flagcdn.com/w320/gm.png', svg: 'https://flagcdn.com/gm.svg'}
// script.js:10 Africa
// script.js:11 Western Africa
// script.js:12 2416664
// script.js:8 Botswana
// script.js:9 {png: 'https://flagcdn.com/w320/bw.png', svg: 'https://flagcdn.com/bw.svg'}
// script.js:10 Africa
// script.js:11 Southern Africa
// script.js:12 2351625
// script.js:8 French Guiana
// script.js:9 {png: 'https://flagcdn.com/w320/gf.png', svg: 'https://flagcdn.com/gf.svg'}
// script.js:10 Americas
// script.js:11 South America
// script.js:12 254541
// script.js:8 Saint Kitts and Nevis
// script.js:9 {png: 'https://flagcdn.com/w320/kn.png', svg: 'https://flagcdn.com/kn.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 53192
// script.js:8 Turkey
// script.js:9 {png: 'https://flagcdn.com/w320/tr.png', svg: 'https://flagcdn.com/tr.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 84339067
// script.js:8 Azerbaijan
// script.js:9 {png: 'https://flagcdn.com/w320/az.png', svg: 'https://flagcdn.com/az.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 10110116
// script.js:8 Costa Rica
// script.js:9 {png: 'https://flagcdn.com/w320/cr.png', svg: 'https://flagcdn.com/cr.svg'}
// script.js:10 Americas
// script.js:11 Central America
// script.js:12 5094114
// script.js:8 Curaçao
// script.js:9 {png: 'https://flagcdn.com/w320/cw.png', svg: 'https://flagcdn.com/cw.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 155014
// script.js:8 Vietnam
// script.js:9 {png: 'https://flagcdn.com/w320/vn.png', svg: 'https://flagcdn.com/vn.svg'}
// script.js:10 Asia
// script.js:11 South-Eastern Asia
// script.js:12 97338583
// script.js:8 Croatia
// script.js:9 {png: 'https://flagcdn.com/w320/hr.png', svg: 'https://flagcdn.com/hr.svg'}
// script.js:10 Europe
// script.js:11 Southeast Europe
// script.js:12 4047200
// script.js:8 Niue
// script.js:9 {png: 'https://flagcdn.com/w320/nu.png', svg: 'https://flagcdn.com/nu.svg'}
// script.js:10 Oceania
// script.js:11 Polynesia
// script.js:12 1470
// script.js:8 Anguilla
// script.js:9 {png: 'https://flagcdn.com/w320/ai.png', svg: 'https://flagcdn.com/ai.svg'}
// script.js:10 Americas
// script.js:11 Caribbean
// script.js:12 13452
// script.js:8 Qatar
// script.js:9 {png: 'https://flagcdn.com/w320/qa.png', svg: 'https://flagcdn.com/qa.svg'}
// script.js:10 Asia
// script.js:11 Western Asia
// script.js:12 2881060
// script.js:8 Colombia
// script.js:9 {png: 'https://flagcdn.com/w320/co.png', svg: 'https://flagcdn.com/co.svg'}
// script.js:10 Americas
// script.js:11 South America
// script.js:12 50882884
