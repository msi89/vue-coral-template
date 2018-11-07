// //  for npm app
import $ from "jquery";

// $(function() {
//   var InputTagItemNumber = 0;
//   var InputTagItems = [];

//   function addInputTagItem(tag) {
//     InputTagItems[InputTagItemNumber] = tag;
//     var parent = document.querySelector(".input-tag-content");
//     var newTag =
//       '<span id="tagItem' +
//       InputTagItemNumber +
//       '" class="input-tag-item">' +
//       tag +
//       '<i onclick="removeInputTagItem(' +
//       InputTagItemNumber +
//       ');">x</i></span>';
//     parent.insertAdjacentHTML("beforeend", newTag);
//     InputTagItemNumber++;
//   }

//   function removeInputTagItem(index) {
//     var parent = document.querySelector("#tagItem" + index);
//     parent.parentNode.removeChild(parent);
//     InputTagItems.splice(index, 1);
//     InputTagItemNumber--;
//     return false;
//   }

//   $("#tag_input").keyup(function(e) {
//     /*space =32 ,=188 ;=59*/

//     var tag = "";
//     if (e.keyCode == "188") {
//       tag = this.value.replace(",", "");
//       if (tag != "") {
//         addInputTagItem(tag);
//         this.value = "";
//       }
//     }
//     if (e.keyCode == "190") {
//       tag = this.value.replace(";", "");
//       if (tag != "") {
//         addInputTagItem(tag);
//         this.value = "";
//       }
//     }
//     if (e.keyCode == "32") {
//       /* var tag = this.value.replace(/\s/g, ""); if(tag !="") { 	addInputTagItem(tag); 	this.value =''; }*/
//     }
//   });

//   //NOTIFICATION
//   $("body").append('<div id="notify-box" class="notification-box"></div>');
//   $(".clear").click(function() {
//     $(this)
//       .parent()
//       .fadeOut("slow");
//   });

//   var toast = 0;
//   $("#notify").click(function() {
//     var hash =
//       '<div id="toast' +
//       toast +
//       '"  class="notification is-danger" style="display:none"> ' +
//       '<button onclick="$(this).parent().hide()" class="clear">x</button>' +
//       " </p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem</p>" +
//       "</div>";
//     $("#notify-box").append(hash);
//     var cur = $("#toast" + toast);
//     cur.fadeIn("slow", function() {
//       setInterval(function() {
//         cur.fadeOut("slow");
//         // $('#notify-box').remove(cur);
//         toast--;
//       }, 10000);
//     });
//     toast++;
//   });

//   //RESPONSIVE TABLES

//   $(".datagrid").each(function(i, table) {
//     let labels = Array.from(table.querySelectorAll("th")).map(function(th) {
//       return th.innerText;
//     });
//     table.querySelectorAll("td").forEach(function(td, i) {
//       td.setAttribute("data-label", labels[i % labels.length]);
//     });
//   });

// });

document.addEventListener("DOMContentLoaded", function() {
  var InputTagItemNumber = 0;
  var InputTagItems = [];

  function addInputTagItem(tag) {
    InputTagItems[InputTagItemNumber] = tag;
    var parent = document.querySelector(".input-tag-content");
    var newTag =
      '<span id="tagItem' +
      InputTagItemNumber +
      '" class="input-tag-item" data-indice="' +
      InputTagItemNumber +
      '" data-value="' +
      tag +
      '">' +
      tag +
      "<i>x</i></span>";
    parent.insertAdjacentHTML("beforeend", newTag);
    InputTagItemNumber++;
  }

  // table responsive
  document.querySelectorAll(".datagrid").forEach(function(table) {
    let labels = Array.from(table.querySelectorAll("th")).map(function(th) {
      return th.innerText;
    });
    table.querySelectorAll("td").forEach(function(td, i) {
      td.setAttribute("data-label", labels[i % labels.length]);
    });
  });

  window.addEventListener("click", function(e) {
    //remove tag input
    document.querySelectorAll(".input-tag-item i").forEach(itag => {
      if (itag.contains(e.target)) {
        var itag_id = itag.parentNode;
        var itag_indice = itag_id.getAttribute("data-indice");
        itag_id.parentNode.removeChild(itag_id);
        InputTagItems.splice(itag_indice, 1);
        InputTagItemNumber--;
      }
    });

    // dropdown
    document.querySelectorAll(".dropdown").forEach(dropdown => {
      if (dropdown.contains(e.target)) {
        dropdown.classList.toggle("is-active");
      } else {
        dropdown.classList.remove("is-active");
      }
    });
    // menu item selected
    // document.querySelectorAll(".menu-list li a").forEach(function(az) {
    //   // az.classList.remove("is-active");
    //   if (az.contains(e.target)) {
    //     az.classList.add("is-active");
    //   } else {
    //     az.classList.remove("is-active");
    //   }
    // });

    //input tag
    document.addEventListener("keyup", function(e) {
      var ti = document.getElementById("tag_input");
      if (ti.contains(e.target)) {
        //     /*space =32 ,=188 ;=59*/

        var tag = "";
        if (e.keyCode == "188") {
          tag = ti.value.replace(",", "");
          if (tag != "") {
            addInputTagItem(tag);
            ti.value = "";
          }
        }
        if (e.keyCode == "190") {
          tag = ti.value.replace(";", "");
          if (tag != "") {
            addInputTagItem(tag);
            ti.value = "";
          }
        }
        if (e.keyCode == "32") {
          /* var tag = this.value.replace(/\s/g, ""); if(tag !="") { 	addInputTagItem(tag); 	this.value =''; }*/
        }
      }
    });

    //accordion
    document.querySelectorAll(".menu-list li a").forEach(atg => {
      if (atg.contains(e.target)) {
        atg.classList.add("switched");
        if (atg.getAttribute("data-expand") == "true") {
          atg.classList.toggle("collapsed");
          var panel = atg.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.display = "none";
            panel.style.maxHeight = null;
          } else {
            panel.style.display = "block";
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        }
      } else {
        atg.classList.remove("switched");
      }
    });

    //others
  });
});
