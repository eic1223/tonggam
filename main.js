(()=>{
    var checkItem1 = false;
    var checkItem2 = false;
    var checkItem3 = false;
    var checkItem4 = false;


    // console.log("?");
    const actions = {
        birdFlies(key) {
            if(key){
                console.log(key);
                document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth*0.25}px)`;
                // document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
            } else{
                console.log(key);
                document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
            }
            
        },
        birdFlies2(key) {
            if(key){
                console.log(key);
                document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`;
            
            } else{
                console.log(key);
                document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
            }
            
        },
        
    };

    // console.log("??");
    const stepElems = document.querySelectorAll('.step');
    const graphicsElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicsElems[0]; 
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1;
    });

    for(let i=0; i< stepElems.length;i++){
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = i;
        graphicsElems[i].dataset.index = i;    
    }

    function activiate(action){
        currentItem.classList.add('visible');
        if(action){
            actions[action](true);
        }
    }

    function inactivate(action){
        currentItem.classList.remove('visible');
        if(action){
            actions[action](false);
        }
    }
    // console.log("ioIndex: "+ioIndex);
    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;
        console.log("!!");
        // for(let i=0; i<stepElems.length;i++){
        for(let i = ioIndex-1; i < ioIndex+2; i++){
            step = stepElems[i];
            if(!step) continue;
            boundingRect = step.getBoundingClientRect();
            console.log(boundingRect);
    
            if(boundingRect.top>window.innerHeight*0.1 && boundingRect.top<window.innerHeight*0.8){
                console.log("액티베이트");
                inactivate(currentItem.dataset.action);   
                currentItem = graphicsElems[step.dataset.index];
                activiate(currentItem.dataset.action);
            }
            // console.log("?");
        }
    });

    //
    const stepElems_new = document.querySelectorAll('.step-new');
    const graphicsElems_new = document.querySelectorAll('.graphic-item-new');
    let currentItem_new = graphicsElems_new[0]; 
    let ioIndex_new;

    const io_new = new IntersectionObserver((entries_new, observer) => {
        ioIndex_new = entries_new[0].target.dataset.index * 1;
    });

    for(let i=0; i< stepElems_new.length;i++){
        io_new.observe(stepElems[i]);
        stepElems_new[i].dataset.index = i;
        graphicsElems_new[i].dataset.index = i;    
    }
    function activiateNew(action){
        currentItem_new.classList.add('visible');
        if(action){
            actions[action](true);
        }
    }

    function inactivateNew(action){
        currentItem_new.classList.remove('visible');
        if(action){
            actions[action](false);
        }
    }
    // console.log("ioIndex: "+ioIndex);
    window.addEventListener('scroll', () => {
        let step_new;
        let boundingRect_new;
        console.log("!!-new");
        // for(let i=0; i<stepElems.length;i++){
        for(let i = ioIndex_new-1; i < ioIndex_new+2; i++){
            step_new = stepElems_new[i];
            if(!step_new) continue;
            boundingRect_new = step_new.getBoundingClientRect();
            console.log(boundingRect_new);
            // console.log("?");

            if(boundingRect_new.top>window.innerHeight*0.1 && boundingRect_new.top<window.innerHeight*0.8){
                console.log("액티베이트_new");
                inactivateNew(currentItem_new.dataset.action);   
                currentItem_new = graphicsElems_new[step_new.dataset.index];
                activiateNew(currentItem_new.dataset.action);
            }
        }
    });

    //


    function f1() {
        alert("f1 called");
        //form validation that recalls the page showing with supplied inputs.    
    }

    function closeAllPopImgs(){
        document.getElementById('child-1').style.display='none';
        document.getElementById('child-2').style.display='none';
        document.getElementById('child-3').style.display='none';
        document.getElementById('child-4').style.display='none';   
    }

    window.onload = function() {
        document.getElementById("toolAir").onclick = function fun() {
            if(document.getElementById('child-1').style.display=='none'){
                closeAllPopImgs();
                document.getElementById('child-1').style.display='block';
                
            } else {
                document.getElementById('child-1').style.display='none';
            }

            
            //f1();
        }
        document.getElementById("toolNoise").onclick = function fun() {
            if(document.getElementById('child-2').style.display=='none'){
                closeAllPopImgs();
                document.getElementById('child-2').style.display='block';
                
            } else {
                document.getElementById('child-2').style.display='none';
            }
            
            //f1();
        }
        document.getElementById("toolGlass").onclick = function fun() {
            if(document.getElementById('child-3').style.display=='none'){
                closeAllPopImgs();
                document.getElementById('child-3').style.display='block';
                
            } else {
                document.getElementById('child-3').style.display='none';
            }
            
            //f1();
        }
        document.getElementById("toolTemperature").onclick = function fun() {
            if(document.getElementById('child-4').style.display=='none'){
                closeAllPopImgs();
                document.getElementById('child-4').style.display='block';

            } else {
                document.getElementById('child-4').style.display='none';
            }
            
            //f1();
        }

    

        // document.getElementById("parent").onclick = function fun() {
        //     //document.getElementById('clickableTarget').style.display='none';
        //     alert("부모 영역 클릭");
        // }

        document.getElementById("child-1").onclick = function fun() {
            //document.getElementById('clickableTarget').style.display='none';
            addStrikethrough('air');
            checkItem1 = true;
            checkNextBtn();
            document.getElementById("child-1").style.display='none';
            document.getElementById('pop-text').style.display='block';
            document.getElementById('pop-text').innerText = '환기가 잘 안 되는지 공기가 탁하다. 창문을 오래 열어 놓았는데도 아까 먹은 음식 냄새가 남아 있어…';
            setTimeout(() => {
                document.getElementById('pop-text').style.display='none';
            }, 5000);
        }

        document.getElementById("child-2").onclick = function fun() {
            //document.getElementById('clickableTarget').style.display='none';
            addStrikethrough('noise');
            checkItem2 = true;
            checkNextBtn();
            document.getElementById("child-2").style.display='none';
            document.getElementById('pop-text').style.display='block';
            document.getElementById('pop-text').innerText = '바깥 소리가 새어들어온다… 옆집 휴대폰 알람 소리까지 들리는 것 같아';
            setTimeout(() => {
                document.getElementById('pop-text').style.display='none';
            }, 5000);
        }

        document.getElementById("child-3").onclick = function fun() {
            //document.getElementById('clickableTarget').style.display='none';
            addStrikethrough('glass');
            checkItem3 = true;
            checkNextBtn();
            document.getElementById("child-3").style.display='none';
            document.getElementById('pop-text').style.display='block';
            document.getElementById('pop-text').innerText = '벽지에 얼룩이 있다. 이게 뭐야, 혹시 곰팡이인가?';
            setTimeout(() => {
                document.getElementById('pop-text').style.display='none';
            }, 5000);
        }

        document.getElementById("child-4").onclick = function fun() {
            //document.getElementById('clickableTarget').style.display='none';
            addStrikethrough('temperature');
            checkItem4 = true;
            checkNextBtn();
            document.getElementById("child-4").style.display='none';
            document.getElementById('pop-text').style.display='block';
            document.getElementById('pop-text').innerText = '온수를 틀었더니 수압이 낮아졌다. 물이 졸졸 나오는데다 그렇게 따뜻하지도 않아…';
            setTimeout(() => {
                document.getElementById('pop-text').style.display='none';
            }, 5000);
        }

        // document.getElementById('pop-air').style.display='none';
        document.getElementById('pop-text').onclick = function fun() {
            document.getElementById('pop-text').style.display='none';
        }

        // document.getElementById('btnToTarget0').onclick = function fun() {
        //     scrollToTargetAdjusted('target0')
        // }
        document.getElementById('btnToTarget2').onclick = function fun() {
            scrollToTargetAdjusted('target2')
        }
        // document.getElementById('btnToTarget3').onclick = function fun() {
        //     scrollToTargetAdjusted('target3')
        // }
        // document.getElementById('btnToTarget3-1').onclick = function fun() {
        //     scrollToTargetAdjusted('target3')
        // }

        document.getElementById("btnToTarget2").disabled = true;
    }

    function checkNextBtn(){
        if(checkItem1 && checkItem2 && checkItem3 && checkItem4){
            document.getElementById("btnToTarget2").disabled = false;
            document.getElementById("btnToTarget2").classList.remove("btnInactive");
            document.getElementById("btnToTarget2").classList.add("btn1");
        }
    }

    function addStrikethrough(type) {
        var element = document.getElementById("check-text-"+type);
        element.classList.add("strikethrough");
     }

    function scrollToTargetAdjusted(targetElement) {
        const element = document.getElementById(targetElement);
        const offset = 200;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        }); 
    }


    window.addEventListener('load', () => {
        setTimeout(()=>scrollTo(0, 0), 100);
    });

    activiate();
})();