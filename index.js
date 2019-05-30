

    //获取body对象
    let body = document.body;
    //获取页面id
    function getId(nameWhat) {
        return document.getElementById(nameWhat);
    }
    //获取指定类下面的class
    function getClass(parent, classname) {
        return parent.getElementsByClassName(classname);
    }

    //获取指定下面的tag标签
    function getTagname(parent, tagname) {
        return parent.getElementsByTagName(tagname);
    }

    //获取指定下面的所有非空子节点
    function getchild(parent) {
        return parent.children;
    }

    //改变位置和position
    function changePosition(name, positioN, toP, lefT) {
        name.style.position = positioN;
        name.style.top = toP;
        name.style.left = lefT;
    }

    //改变大小形状背景
    function changeLike(name, widtH, heighT, backgrounD, bordeR) {
        name.style.width = widtH;
        name.style.height = heighT;
        name.style.background = backgrounD;
        name.style.border = bordeR;
    }
    //改变display
    function changeDisply(name,a,b,c,d){
        name.style.display = a;
        name.style.justifyContent = b;
        name.style.alignItems = c;
        name.style.flexDirection = d;
    }


    let cross = getClass(body,"image")[0];
    let navs = getClass(body,"nav");
    let crossl = cross.offsetWidth /2;
    let navsl = navs[0].offsetWidth / 2;
    cross.style.left  = navsl -crossl +"px";
    
    // console.log(navsl);
    for(let i =0;i<navs.length;i++){
        navs[i].onmouseover = function(){
            let navsls = this.offsetWidth / 2;
            cross.style.left  = this.offsetLeft + navsls -crossl +"px";
        }
        // navs[i].onmouseout = function(){
        //     let navsl = navs[0].offsetWidth / 2;
        //     cross.style.left  = navsl -crossl +"px";
        // }
    }



    
    wow = new WOW({
        animateClass: 'animated',
    });
    wow.init();

