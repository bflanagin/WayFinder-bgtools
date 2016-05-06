function get_armor(url) {

var http = new XMLHttpRequest();

    var pagedata = "";
//console.log("From twitch.js: "+url)
http.onreadystatechange = function() {
    if (http.readyState == 4) {

        pagedata = http.responseText;

        if(http.responseText == 100) {
            console.log(http.responseText);

        } else if(http.responseText == 101) {
            console.log(http.responseText);

        } else {

            pagedata = http.responseText;


            //console.log("From get_armor"+pagedata);

            var table = pagedata.split('<table id="armor-and-shields-table"><caption>Armor and Shields</caption>')[1].split('</table>')[0];
            //console.log(table);

            var weights = table.split("<thead>");
            var numoftables = 1;
            while(numoftables < weights.length) {
                //console.log(weights[numoftables]);
                var name = "";
                var cost = "";
                var ab = "";
                var dexb = "";
                var acp = "";
                var asfc = "";
                var speed30p = "";
                var speed20p = "";
                var weight = "";
                var discription = "";
                var type = numoftables;

                var items = weights[numoftables].split("<tr>");

                var numofitems = 1;

                while(numofitems < items.length) {
                    //console.log(items[numofitems]);
                    var item = items[numofitems].split("<td>");

                    if(item[1] != undefined) {
                    name = item[1].split("</td>")[0];
                    cost = item[2].split("</td>")[0];
                    ab = item[3].split("</td>")[0];
                    dexb = item[4].split("</td>")[0];
                    acp = item[5].split("</td>")[0];
                    asfc = item[6].split("</td>")[0];
                    speed30p = item[7].split("</td>")[0];
                    speed20p = item[8].split("</td>")[0];
                    weight = item[9].split("</td>")[0];
                        console.log(name);
                       if(pagedata.split('class="stat-block-title">'+name+"</p>")[1] != undefined) {

                           var discblock = pagedata.split('class="stat-block-title">'+name+"</p>")[1].split("<p id=")[0];
                        discription = discblock.split('<p class="stat-block">')[1].split("</p>")[0];
                        console.log(discription);
                        } else {
                           discription = "";
                       }

                        put_armor(name,cost,ab,dexb,acp,asfc,speed30p,speed20p,weight,discription,numoftables);

                    }


                    numofitems = numofitems + 1;
                }



                numoftables = numoftables + 1;

            }

        }

    }

}

http.open('GET', url.trim(), true);
http.send(null);


}

function put_armor(name,cost,ab,dexb,acp,asfc,speed30p,speed20p,weight,discription,type) {

        var http = new XMLHttpRequest();

        var url = "http://openseed.vagueentertainment.com/devs/Vag-01001011/VagRpg-45454/scripts/armordb.php";
       // console.log(url)
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                //console.log(http.responseText);
                //userid = http.responseText;
                if(http.responseText == 100) {
                    console.log("Incorrect DevID");
                } else if(http.responseText == 101) {
                    console.log("Incorrect AppID");
                } else {
                  //  console.log(http.responseText);



                }

            }
        }
        http.open('POST', url.trim(), true);
        //http.send(null);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send("name=" + name + "&cost=" + cost + "&AB="+ ab + "&DexB=" + dexb + "&ACP=" + acp + "&ASFC="+ asfc + "&Speed30P=" + speed30p
                   + "&Speed20P=" + speed20p + "&weight="+ weight + "&discription=" + discription + "&type=" + type);
    }

function get_weapons(url) {

var http = new XMLHttpRequest();

    var pagedata = "";
//console.log("From twitch.js: "+url)
http.onreadystatechange = function() {
    if (http.readyState == 4) {

        pagedata = http.responseText;

        if(http.responseText == 100) {
            console.log(http.responseText);

        } else if(http.responseText == 101) {
            console.log(http.responseText);

        } else {

            pagedata = http.responseText;


            //console.log("From get_armor"+pagedata);

            var swtable = pagedata.split('<div class = "table"><table id="simple-weapons-table"><caption>Simple Weapons</caption>')[1].split('</table>')[0];
            //console.log(table);
            var mwtable = pagedata.split('<div class = "table"><table id="martial-weapons-table"><caption>Martial Weapons</caption>')[1].split('</table>')[0];
            var ewtable = pagedata.split('<div class = "table"><table id="exotic-weapons-table"><caption>Exotic Weapons</caption>')[1].split('</table>')[0];


            var weights = swtable.split("<thead>");
            var numoftables = 1;
            while(numoftables < weights.length) {
                //console.log(weights[numoftables]);
                var name = "";
                var cost = "";
                var dmgs = "";
                var dmgm = "";
                var crit = "";
                var range = "";
                var weight = "";
                var dtype = "";
                var special = ""
                var discription = "";
                var type = numoftables;

                var items = weights[numoftables].split("<tr>");

                var numofitems = 1;

                while(numofitems < items.length) {
                    //console.log(items[numofitems]);
                    var item = items[numofitems].split("<td>");

                    if(item[1] != undefined) {
                    name = item[1].split("</td>")[0];
                    cost = item[2].split("</td>")[0];
                    dmgs = item[3].split("</td>")[0];
                    dmgm = item[4].split("</td>")[0];
                    crit = item[5].split("</td>")[0];
                    range = item[6].split("</td>")[0];
                    weight = item[7].split("</td>")[0];
                    dtype = item[8].split("</td>")[0];
                    special = item[9].split("</td>")[0];

                        console.log(name);
                       if(pagedata.split('class="stat-block-title">'+name+"</p>")[1] != undefined) {

                           var discblock = pagedata.split('class="stat-block-title">'+name+"</p>")[1].split("<p id=")[0];
                        discription = discblock.split('<p class="stat-block">')[1].split("</p>")[0];
                        console.log(discription);
                        } else {
                           discription = "";
                       }

                        put_weapons(name,cost,dmgs,dmgm,crit,range,weight,dtype,special,discription,"1",numoftables);



                    }


                    numofitems = numofitems + 1;
                }



                numoftables = numoftables + 1;

            }


             weights = mwtable.split("<thead>");
             numoftables = 1;
            while(numoftables < weights.length) {
                //console.log(weights[numoftables]);
                 name = "";
                 cost = "";
                 dmgs = "";
                 dmgm = "";
                 crit = "";
                 range = "";
                 weight = "";
                 dtype = "";
                 special = ""
                 discription = "";
                 type = numoftables;

                 items = weights[numoftables].split("<tr>");

                 numofitems = 1;

                while(numofitems < items.length) {
                    //console.log(items[numofitems]);
                     item = items[numofitems].split("<td>");

                    if(item[1] != undefined) {
                    name = item[1].split("</td>")[0];
                    cost = item[2].split("</td>")[0];
                    dmgs = item[3].split("</td>")[0];
                    dmgm = item[4].split("</td>")[0];
                    crit = item[5].split("</td>")[0];
                    range = item[6].split("</td>")[0];
                    weight = item[7].split("</td>")[0];
                    dtype = item[8].split("</td>")[0];
                    special = item[9].split("</td>")[0];

                        console.log(name);
                       if(pagedata.split('class="stat-block-title">'+name+"</p>")[1] != undefined) {

                            discblock = pagedata.split('class="stat-block-title">'+name+"</p>")[1].split("<p id=")[0];
                        discription = discblock.split('<p class="stat-block">')[1].split("</p>")[0];
                        console.log(discription);
                        } else {
                           discription = "";
                       }

                        put_weapons(name,cost,dmgs,dmgm,crit,range,weight,dtype,special,discription,"2",numoftables);

                    }


                    numofitems = numofitems + 1;
                }



                numoftables = numoftables + 1;

            }

            weights = ewtable.split("<thead>");
            numoftables = 1;
           while(numoftables < weights.length) {
               //console.log(weights[numoftables]);
                name = "";
                cost = "";
                dmgs = "";
                dmgm = "";
                crit = "";
                range = "";
                weight = "";
                dtype = "";
                special = ""
                discription = "";
                type = numoftables;

                items = weights[numoftables].split("<tr>");

                numofitems = 1;

               while(numofitems < items.length) {
                   //console.log(items[numofitems]);
                    item = items[numofitems].split("<td>");

                   if(item[1] != undefined) {
                   name = item[1].split("</td>")[0];
                   cost = item[2].split("</td>")[0];
                   dmgs = item[3].split("</td>")[0];
                   dmgm = item[4].split("</td>")[0];
                   crit = item[5].split("</td>")[0];
                   range = item[6].split("</td>")[0];
                   weight = item[7].split("</td>")[0];
                   dtype = item[8].split("</td>")[0];
                   special = item[9].split("</td>")[0];

                       console.log(name);
                      if(pagedata.split('class="stat-block-title">'+name+"</p>")[1] != undefined) {

                           discblock = pagedata.split('class="stat-block-title">'+name+"</p>")[1].split("<p id=")[0];
                       discription = discblock.split('<p class="stat-block">')[1].split("</p>")[0];
                       console.log(discription);
                       } else {
                          discription = "";
                      }

                       put_weapons(name,cost,dmgs,dmgm,crit,range,weight,dtype,special,discription,"2",numoftables);

                   }


                   numofitems = numofitems + 1;
               }



               numoftables = numoftables + 1;

           }

            get_ammunition(url);


        }

    }

}

http.open('GET', url.trim(), true);
http.send(null);


}

function put_weapons(name,cost,dmgs,dmgm,crit,range,weight,dtype,special,discription,mtype,stype) {

        var http = new XMLHttpRequest();

        var url = "http://openseed.vagueentertainment.com/devs/Vag-01001011/VagRpg-45454/scripts/weapondb.php";
       // console.log(url)
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                //console.log(http.responseText);
                //userid = http.responseText;
                if(http.responseText == 100) {
                    console.log("Incorrect DevID");
                } else if(http.responseText == 101) {
                    console.log("Incorrect AppID");
                } else {
                   // console.log(http.responseText);



                }

            }
        }
        http.open('POST', url.trim(), true);
        //http.send(null);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send("name=" + name + "&cost=" + cost + "&dmgS="+  dmgs + "&dmgM=" + dmgm + "&crit=" + crit + "&rge="+ range
                   + "&weight="+ weight + "&dtype="+ dtype + "&special" + special +" &discription=" + discription + "&mtype=" + mtype +"&stype=" + stype);
    }


function get_ammunition(url) {

var http = new XMLHttpRequest();

    var pagedata = "";
//console.log("From twitch.js: "+url)
http.onreadystatechange = function() {
    if (http.readyState == 4) {

        pagedata = http.responseText;

        if(http.responseText == 100) {
            console.log(http.responseText);

        } else if(http.responseText == 101) {
            console.log(http.responseText);

        } else {

            pagedata = http.responseText;


            //console.log("From get_armor"+pagedata);

            var table = pagedata.split('<table id="ammunition-table"><caption>Ammunition</caption>')[1].split('</table>')[0];
            //console.log(table);

            var weights = table.split("<thead>");
            var numoftables = 1;
            while(numoftables < weights.length) {
                //console.log(weights[numoftables]);
                var name = "";
                var cost = "";
                var weight = "";
                //var discription = "";
                //var type = numoftables;

                var items = weights[numoftables].split("<tr>");

                var numofitems = 1;

                while(numofitems < items.length) {
                    //console.log(items[numofitems]);
                    var item = items[numofitems].split("<td>");

                    if(item[1] != undefined) {
                    name = item[1].split("</td>")[0];
                    cost = item[2].split("</td>")[0];
                    weight = item[3].split("</td>")[0];
                        console.log(name);
                       if(pagedata.split('class="stat-block-title">'+name+"</p>")[1] != undefined) {

                           var discblock = pagedata.split('class="stat-block-title">'+name+"</p>")[1].split("<p id=")[0];
                        //discription = discblock.split('<p class="stat-block">')[1].split("</p>")[0];
                        //console.log(discription);
                        } else {
                           //discription = "";
                       }

                        put_ammunition(name,cost,weight);

                    }


                    numofitems = numofitems + 1;
                }



                numoftables = numoftables + 1;

            }

        }

    }

}

http.open('GET', url.trim(), true);
http.send(null);


}


function put_ammunition(name,cost,weight) {

        var http = new XMLHttpRequest();

        var url = "http://openseed.vagueentertainment.com/devs/Vag-01001011/VagRpg-45454/scripts/ammunitiondb.php";
       // console.log(url)
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                //console.log(http.responseText);
                //userid = http.responseText;
                if(http.responseText == 100) {
                    console.log("Incorrect DevID");
                } else if(http.responseText == 101) {
                    console.log("Incorrect AppID");
                } else {
                   // console.log(http.responseText);



                }

            }
        }
        http.open('POST', url.trim(), true);
        //http.send(null);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send("name=" + name + "&cost=" + cost + "&weight="+ weight);
    }



function get_items(url,type) {

var http = new XMLHttpRequest();

    var pagedata = "";
//console.log("From twitch.js: "+url)
http.onreadystatechange = function() {
    if (http.readyState == 4) {

        pagedata = http.responseText;

        if(http.responseText == 100) {
            console.log(http.responseText);

        } else if(http.responseText == 101) {
            console.log(http.responseText);

        } else {

            pagedata = http.responseText;


            //console.log("From get_armor"+pagedata);
                var table = "";

            switch (type) {
             case 1: table= pagedata.split('<div class = "table"><table id="adventuring-gear"><caption>Adventuring Gear</caption>')[1].split('</table>')[0];break;
             case 2: table= pagedata.split('<table id="tools-and-skill-kits-table"><caption>Tools and Skill Kits</caption>')[1].split('</table>')[0];break;
             case 3: table= pagedata.split('<table id="pets-and-familiars-table"><caption>Pets and Familiars</caption>')[1].split('</table>')[0];break;
             case 4: table= pagedata.split('<table id="clothing-table"><caption>Clothing</caption>')[1].split('</table>')[0];break;
             case 5: table= pagedata.split('<table id="entertainment-table"><caption>Entertainment</p></caption>')[1].split('</table>')[0];break;
             case 6: table= pagedata.split('<table id="food-and-drink-table"><caption>Food and Drink</caption>')[1].split('</table>')[0];break;
             case 7: table= pagedata.split('<table id="lodging-and-services-table"><caption>Lodging and Services</caption>')[1].split('</table>')[0];break;
             default: break;
            }


                 //console.log(table);

            var weights = table.split("<thead>");
            var numoftables = 1;
            while(numoftables < weights.length) {
                //console.log(weights[numoftables]);
                var name = "";
                var cost = "";
                var weight = "";
                var discription = "";
                //var type = numoftables;

                var items = weights[numoftables].split("<tr>");

                var numofitems = 1;

                while(numofitems < items.length) {
                    //console.log(items[numofitems]);
                    var item = items[numofitems].split("<td>");

                    if(item[1] != undefined) {
                    name = item[1].split("</td>")[0];
                    cost = item[2].split("</td>")[0];
                    weight = item[3].split("</td>")[0];
                        console.log(name);
                       if(pagedata.split('class="stat-block-title">'+name+"</p>")[1] != undefined) {

                           var discblock = pagedata.split('class="stat-block-title">'+name+"</p>")[1].split("<p id=")[0];
                        discription = discblock.split('<p class="stat-block">')[1].split("</p>")[0];
                        console.log(discription);
                        } else {
                           discription = "";
                       }

                        put_items(name,cost,weight,discription,type);

                    }


                    numofitems = numofitems + 1;
                }



                numoftables = numoftables + 1;

            }

        }

    }

}

http.open('GET', url.trim(), true);
http.send(null);


}


function put_items(name,cost,weight,discription,type) {

        var http = new XMLHttpRequest();

        var url = "http://openseed.vagueentertainment.com/devs/Vag-01001011/VagRpg-45454/scripts/itemsdb.php";
       // console.log(url)
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                //console.log(http.responseText);
                //userid = http.responseText;
                if(http.responseText == 100) {
                    console.log("Incorrect DevID");
                } else if(http.responseText == 101) {
                    console.log("Incorrect AppID");
                } else {
                   // console.log(http.responseText);



                }

            }
        }
        http.open('POST', url.trim(), true);
        //http.send(null);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send("name=" + name + "&cost=" + cost + "&weight="+ weight +"&discription="+discription+"&type="+type);
    }



function get_Bestiary(url) {

var http = new XMLHttpRequest();

    var pagedata = "";
//console.log("From paizo.js: "+url)
http.onreadystatechange = function() {
    if (http.readyState == 4) {

        pagedata = http.responseText;

        if(http.responseText == 100) {
            console.log(http.responseText);

        } else if(http.responseText == 101) {
            console.log(http.responseText);

        } else {

            pagedata = http.responseText;


           //console.log("From get_beasts"+pagedata);

            var table = pagedata.split('<ul id="index-monsters');
            console.log("Alphabet = "+table.length);
            var tnum = 1;
            while(tnum <= table.length -1 ) {

                console.log(table[tnum].split("title=")[1].split(">")[0]);
                var beasturl = table[tnum].split("<li class=");
                    var bnum = 1;

                while(bnum <= beasturl.length -1) {

                         console.log(beasturl[bnum].split('<a href="')[1].split('">')[0]);

                                get_Beast(beasturl[bnum].split('<a href="')[1].split('">')[0]);

                        bnum = bnum + 1;
                }

                tnum = tnum + 1;
                }

            }

        }

    }



http.open('GET', url.trim(), true);
http.send(null);


}

function get_Beast(url) {

    var http = new XMLHttpRequest();

        var pagedata = "";
    var discription = " ";
    var name = " ";
    var cr = " ";
    var xp = " ";
    var standard = " ";
    var def = " ";
    var of = " ";
    var stat = " ";
    var sa = " ";
    var eco = " ";

    console.log(url);

    http.onreadystatechange = function() {
        if (http.readyState == 4) {

            pagedata = http.responseText;


            if(http.responseText == 100) {
                console.log(http.responseText);

            } else if(http.responseText == 101) {
                console.log(http.responseText);

            } else {

                pagedata = http.responseText;

                var numoblocks = pagedata.split('monster-header">').length;


                var blocknum = 1;


                    var block = pagedata.split('monster-header">')[blocknum];

                if(block != undefined) {

                    if(block.split('"flavor-text">')[blocknum] != undefined) {
                    discription = block.split('"flavor-text">')[blocknum].split('</p>')[0];
                    }else {
                        if(block.split('</h1>')[blocknum] != undefined) {
                      discription = block.split('</h1>')[blocknum].split('</p>')[0];
                        }
                    }

                 name = block.split('"stat-block-title">')[blocknum].split("<span")[0];

                        if(block.split('"stat-block-cr">')[blocknum] != undefined) {
                    cr = block.split('"stat-block-cr">')[blocknum].split("</span>")[0];
                        }

                xp = block.split('"stat-block-xp">')[blocknum].split("</p>")[0];


                console.log(blocknum+"-"+numoblocks+"."+name+"\n");
                    //beastname = name;

                var subs = block.split('"stat-block-breaker">');

                standard = " ";
                 def = " ";
                of = " ";
                 stat = " ";
                 sa = " ";
                 eco = " ";

                var stats = subs[0].split('stat-block-1">');
                var num = 1;

                while(num < stats.length) {
                    standard = standard+stats[num]+":;:";

                    num = num + 1;
                }


                        var dstat = subs[1].split('stat-block-1">');
                         num = 1;

                        while(num < dstat.length) {
                            def = def+dstat[num]+":;:";

                            num = num + 1;
                        }

                        var ostat = subs[2].split('stat-block-1">');
                        num = 1;

                        while(num < ostat.length) {
                            of = of+ostat[num]+":;:";

                            num = num + 1;
                        }

                        var sstat = subs[3].split('stat-block-1">');
                        num = 1;

                        while(num < sstat.length) {
                            stat = stat+sstat[num]+":;:";

                            num = num + 1;
                        }


                        var estat = subs[4].split('stat-block-1">');
                        num = 1;

                        while(num < estat.length) {
                            eco = eco+estat[num]+":;:";

                            num = num + 1;
                        }

                        if(subs[5] != undefined) {
                        var sastat = subs[5].split('<p class = "stat-block-1">');
                        num = 1;

                        while(num < sastat.length) {
                            sa = sa+sastat[num]+":;:";

                            num = num + 1;
                        }

                        }

                put_beast(name,discription,cr,xp,standard,def,of,stat,sa,eco);
                        }


    }

   }

   }


    http.open('GET', "http://paizo.com"+url, true);
    http.send(null);


}


function put_beast(name,discription,cr,xp,standard,def,of,stat,sa,eco) {

        var http = new XMLHttpRequest();

        var url = "http://openseed.vagueentertainment.com/devs/Vag-01001011/VagRpg-45454/scripts/beasts.php";
       // console.log(url)
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                //console.log(http.responseText);
                //userid = http.responseText;
                if(http.responseText == 100) {
                    console.log("Incorrect DevID");
                } else if(http.responseText == 101) {
                    console.log("Incorrect AppID");
                } else {
                    console.log(http.responseText);



                }

            }
        }
        http.open('POST', url.trim(), true);
        //http.send(null);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send("name=" + name.replace(/\'/g,"&#x27;") + "&discription=" +discription.replace(/\'/g,"&#x27;")+ "&cr=" + cr + "&xp="+ xp +"&standard="+standard+"&def="+def+"&of="+of+"&stat="+stat+"&sa="+sa+"&eco="+eco);
    }
