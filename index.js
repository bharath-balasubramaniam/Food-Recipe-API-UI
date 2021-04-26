function createEle(ele, eleclass = "", eletype = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", eleclass);
  element.setAttribute("type", eletype);
  return element;
}
let bdiv = createEle("div", "container-lg");
let row1 = createEle("div", "row");
let col1 = createEle("div", "col-12");

let div = createEle("div", "text-center mt-3");

function span(n) {
  let span_arr = ["B", "ee", " ", "W", "e"];
  for (let i = 0; i < n; i++) {
    let span = createEle("span", "font-weight-normal display-3");
    span.innerHTML = `${span_arr[i]}`;
    div.append(span);
  }
}
span(5);

let p = createEle("p", "text-center h2");
p.innerHTML = "A Complete Recipe Search Engine";

let form = createEle("form");
let div1 = createEle(
  "div",
  "form-row align-items-center d-flex justify-content-center"
);
let div2 = createEle("div", "col-auto");

let inp = createEle("input", "form-control lg-3 trans", "text");
inp.id = "searchTab";
inp.setAttribute("placeholder", "search your recipe here");

div2.append(inp);

let div2a = createEle(
  "div",
  "col-auto mb-2 d-flex justify-content-center mt-2"
);
let button = createEle("button", "btn btn-light trans h2");
button.style = "margin-bottom: 0px";
button.innerHTML = "Get Recipe !";
button.setAttribute("onclick", "foo()");
button.onclick = function () {
  foo();
};
div2a.append(button);

div1.append(div2);
form.append(div1);

col1.append(div, p, form, div2a);
row1.append(col1);
let br = createEle("br");
let row2 = createEle("div", "row");

let row3 = createEle("div");
let col3 = createEle("div", "col-12");
let foot = createEle("p", "text-center");
foot.id = "footer";
foot.style = "padding-top:100%";
foot.innerHTML = `<p>Copyright©2021!IMPUDENT CRITTER-All Rights Reserved!</p>`;
col3.append(foot);
row3.append(col3);

let table = createEle("table", "table table-bordered table-dark");
let tbody = createEle("tbody");

for (let j = 0; j < 32; j++) {
  let tr = createEle("tr");
  tr.id = `tr_${j}`;
  let td1 = createEle("td");
  td1.id = `td1_${j}`;
  let td2 = createEle("td");
  td2.id = `td2_${j}`;
  tr.append(td1, td2);
  tbody.append(tr);
}
table.append(tbody);

let modal = createEle("div", "modal fade");
modal.id = "exampleModal";
modal.setAttribute("tabindex", "-1");
modal.setAttribute("role", "dialog");
modal.setAttribute("aria-labelledby", "exampleModalLabel");
modal.setAttribute("aria-hidden", "true");

let modalclass = createEle("div", "modal-dialog");
modalclass.setAttribute("role", "document");
let modalcls = createEle("div", "modal-content");
let modalh = createEle("div", "modal-header");
let mh5 = createEle("h5", "modal-title");
mh5.id = "exampleModalLabel";
mh5.innerHTML = "Total Nutrients";
modalh.append(mh5);
let modalb = createEle("div", "modal-body");
modalb.id = "modal";
let modalf = createEle("div", "modal-footer d-flex justify-content-center");
let modbtn = createEle("button", "btn btn-dark", "button");
modbtn.setAttribute("data-dismiss", "modal");
modbtn.innerHTML = "close";
modalf.append(modbtn);
modalcls.append(modalh, modalb, modalf);
modalclass.append(modalcls);
modal.append(modalclass);
document.body.append(modal);

for (let i = 0; i < 20; i++) {
  let col2 = createEle("div", "col-12 col-md-6 col-lg-6");
  let card = createEle("div", "card col-12 col-lg-12 col-md-12 trans trans2");
  card.id = `card${i}`;
  let cardclass = createEle("div", "row no-gutters");
  let cardimg = createEle("div", "col-lg-4 col-md-4 col-4");
  let img = createEle("img", "img-thumbnail img-thumbnail1");
  img.id = `img_${i}`;
  cardimg.append(img);

  let cardbody = createEle("div", "col-lg-8 col-md-8 col-8");
  let cardbodyclass = createEle("div", "card-body");
  let h5 = createEle("h5", "card-title");
  h5.id = `h5_${i}`;
  let h6 = createEle("h6", "card-subtitle");
  h6.id = `h6_${i}`;
  let p = createEle("p", "card-text");
  p.id = `p_${i}`;
  let p2 = createEle("p", "card-text2");
  p2.id = `p2_${i}`;
  let cardbtn = createEle("div", "row");
  let cardbtnclass = createEle("div", "col-lg-6 col-12 col-md-6");
  let cardbtn1 = createEle("button", "btn btn-light trans h2", "button");
  cardbtn1.id = `cardbtn1_${i}`;
  cardbtn1.setAttribute("data-toggle", "modal");
  cardbtn1.setAttribute("data-target", "#exampleModal");
  cardbtn1.setAttribute("onclick", "nutri(i)");
  cardbtnclass.append(cardbtn1);

  let cardbtnclass1 = createEle("div", "col-lg-6 col-12 col-md-6");
  let cardbtn2 = createEle("button", "btn btn-light trans h2", "button");
  cardbtn2.id = `cardbtn2_${i}`;
  let a2 = createEle("a");
  a2.id = `res_${i}`;
  cardbtn2.append(a2);
  cardbtnclass1.append(cardbtn2);
  cardbtn.append(cardbtnclass, cardbtnclass1);
  cardbodyclass.append(h5, h6, p, p2, cardbtn);
  cardbody.append(cardbodyclass);
  cardclass.append(cardimg, cardbody);
  card.append(cardclass);
  col2.append(card);
  row2.append(col2);
}
function foo() {
  function re() {
    location.reload();
  }
  let src = document.getElementById("searchTab");
  console.log(src.value);
  fetch(
    `https://api.edamam.com/search?q=${src.value}&app_id=59dc3ac9&app_key=7af6a2eb59806b4fe83d1882f89cc433&from=0&to=20`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      let a = data["count"];
      let b = a < 20 ? a : 20;
      for (let i = 0; i < b; i++) {
        document.getElementById(
          `h5_${i}`
        ).innerHTML = `<b>Recipe:</b> ${data["hits"][i]["recipe"]["label"]}`;
        let cal = data["hits"][i]["recipe"]["calories"];
        document.getElementById(
          `h6_${i}`
        ).innerHTML = `<b>Calories:</b> ${Math.round(cal)} Kcal.`;
        document.getElementById(
          `p_${i}`
        ).innerHTML = `<b>Ingredients:</b> ${data["hits"][i]["recipe"]["ingredientLines"]}`;
        let f_img = document.getElementById(`img_${i}`);
        f_img.setAttribute("src", `${data["hits"][i]["recipe"]["image"]}`);
        f_img.classList.remove("img-thumbnail1");
        document.getElementById(`cardbtn1_${i}`).innerHTML = "<a>Nutrients</a>";
        document.getElementById(`res_${i}`).innerHTML = "<a>Recipe</a>";
        document
          .getElementById(`res_${i}`)
          .setAttribute("href", `${data["hits"][i]["recipe"]["url"]}`);
        document.getElementById(`res_${i}`).setAttribute("target", "_blank");

        document.getElementById(
          `p2_${i}`
        ).innerHTML = `<b>Meal Type / Cuisine Type:</b> ${data["hits"][i]["recipe"]["mealType"]} / ${data["hits"][i]["recipe"]["cuisineType"]}`;
        document.querySelector("form").reset();
        let bv = document.getElementById(`card${i}`);
        bv.classList.remove("trans2");

        let bb = `cardbtn1_${i}`.slice(9, 11);
        console.log(bb);
        document.getElementById(`cardbtn1_${i}`).onclick = function () {
          nutri(`${bb}`);
        };
        function nutri(i) {
          let k = 0;
          let nutr = data["hits"][i]["recipe"]["totalNutrients"];
          for (let key in nutr) {
            if (nutr.hasOwnProperty(key)) {
              let value = nutr[key];
              document.getElementById(`td1_${k}`).style =
                "text-align:center;padding:0%";
              document.getElementById(
                `td1_${k}`
              ).innerHTML = `${value["label"]}`;
              document.getElementById(`td2_${k}`).style =
                "text-align:center;padding:0%";
              let c = Math.round(value["quantity"]);
              document.getElementById(
                `td2_${k}`
              ).innerHTML = `${c} ${value["unit"]}`;
              k++;
            }
          }
        }
      }
      table.append(tbody);
      document.getElementById("modal").append(table);
    })
    .catch((err) => {
      console.log(err);
    });
  let inp1 = document.getElementById("searchTab");
  inp1.addEventListener("click", function () {
    re();
  });
  setTimeout(() => {
    document.getElementById("footer").style = "padding-top:5%";
    document.getElementById(
      "footer"
    ).innerHTML = `<p>Copyright©2021!IMPUDENT CRITTER-All Rights Reserved!</p>`;
    col3.append(foot);
    row3.append(col3);
    bdiv.append(row3);
  }, 2500);
}
bdiv.append(row1, br);
bdiv.append(row2);
bdiv.append(row3);
document.body.append(bdiv);
