import {data} from "./data.js"
const root = document.querySelector("#root");
data.map((item,) => {
  const itemHTML =`
  <div class=" w-[362px] h-[880px] shadow-xl rounded-xl">
  <div>
  <img src="${item.img}">
  <h1 class = "text-[24px] ml-[100px]">${item.info}</h1>
  <div class = "w-[300px] h-[60px] text-[16px] ml-[16px] mt-[20px]">
  <div class = "flex justify-between">
            <h3>${item.a1.info2}</h3>
            <h3>${item.a1.info3}</h3>
            </div>
            <div class = "flex  justify-between">
            <h1>${item.a2.info4}</h1>    
            <h1>${item.a2.info5}</h1>    
            </div>
            <div>
            <h1>${item.a3.info6}</h1>    
            <h1>${item.a3.info7}</h1>    
            </div>           
            <div class = "mt-[20px] flex w-[112px] h-[18px]">
            <p class = "text-[14px] text-[#758499] mt-[4px]">от</p>
             <h1 class = "text-[20px] ml-[20px]">433 ₽/м²</h1>
             </div>
            <div class = "mt-[30px]">
  </div>
  <h1>Цвет</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Толшина</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Поверхность</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <button class="bg-[#FFC400] w-[210px] h-[50px] rounded-[60px]  mt-[30px]">Рассчитать стоимость</button>
                <button class="bg-[#FFFFFF] w-[210px] h-[50px] rounded-[60px] mt-[10px] border-[#FFC400] border-[2px]">Подробнее о товаре</button>
            </div>
</div>
</div>`
  root.innerHTML += itemHTML;
});

const div1 = document.querySelector(".div1")
data.map((item,) => {
    const q1 = `
    <div class=" w-[362px] h-[880px] shadow-xl rounded-xl" >
    <div class=''>
    <img src="${item.img}">
        <h1 class = "text-[24px] ml-[30px]">${item.info}</h1>
            <div class = "w-[300px] h-[60px] text-[16px] ml-[30px] mt-[20px]">
            <div class = "flex justify-between">
            <h3>${item.a1.info2}</h3>
            <h3>${item.a1.info3}</h3>
            </div>
            <div class = "flex  justify-between">
            <h1>${item.a2.info4}</h1>    
            <h1>${item.a2.info5}</h1>    
            </div>
            <div>
            <h1>${item.a3.info6}</h1>    
            <h1>${item.a3.info7}</h1>    
            </div>           
            <div class = "mt-[20px] flex w-[112px] h-[18px]">
            <p class = "text-[14px] text-[#758499] mt-[4px]">от</p>
             <h1 class = "text-[20px] ml-[20px]">433 ₽/м²</h1>
             </div>
            <div class = "mt-[30px]">
              <h1>Цвет</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Толшина</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Поверхность</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <button class="bg-[#FFC400] w-[210px] h-[50px] rounded-[60px]  mt-[30px]">Рассчитать стоимость</button>
                <button class="bg-[#FFFFFF] w-[210px] h-[50px] rounded-[60px] mt-[10px] border-[#FFC400] border-[2px]">Подробнее о товаре</button>
            </div>
</div>
</div>`;
    div1.innerHTML += q1;
});

const div2 = document.querySelector(".div2")
data.map((item,) => {
    const q3 = `
    <div class=" w-[362px] h-[880px] shadow-xl rounded-xl" >
    <div class=''>
    <img src="${item.img}">
        <h1 class = "text-[24px] ml-[30px]">${item.info}</h1>
            <div class = "w-[300px] h-[60px] text-[16px] ml-[30px] mt-[20px]">
            <div class = "flex justify-between">
            <h3>${item.a1.info2}</h3>
            <h3>${item.a1.info3}</h3>
            </div>
            <div class = "flex  justify-between">
            <h1>${item.a2.info4}</h1>    
            <h1>${item.a2.info5}</h1>    
            </div>
            <div>
            <h1>${item.a3.info6}</h1>    
            <h1>${item.a3.info7}</h1>    
            </div>           
            <div class = "mt-[20px] flex w-[112px] h-[18px]">
            <p class = "text-[14px] text-[#758499] mt-[4px]">от</p>
             <h1 class = "text-[20px] ml-[20px]">433 ₽/м²</h1>
             </div>
            <div class = "mt-[30px]">
              <h1>Цвет</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Толшина</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Поверхность</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <button class="bg-[#FFC400] w-[210px] h-[50px] rounded-[60px]  mt-[30px]">Рассчитать стоимость</button>
                <button class="bg-[#FFFFFF] w-[210px] h-[50px] rounded-[60px] mt-[10px] border-[#FFC400] border-[2px]">Подробнее о товаре</button>
            </div>
</div>
</div>`;
div2.innerHTML += q3;
});

