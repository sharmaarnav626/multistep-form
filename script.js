const Total_cost = [];

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // plan
      document.getElementById("Arcade").innerHTML = " $90/yr";
      document.getElementById("Advanced").innerHTML = " $120/yr";
      document.getElementById("Pro").innerHTML = " $150/yr";
      document.getElementById("Arcade-month").innerHTML = "2 months free";
      document.getElementById("Advanced-month").innerHTML = "2 months free";
      document.getElementById("Pro-month").innerHTML = "2 months free";
      document.getElementById("first-plan").style.height = "210px";
      document.getElementById("second-plan").style.height = "210px";
      document.getElementById("third-plan").style.height = "210px";
      document.getElementById("second-plan").style.backgroundColor = "";
      document.getElementById("first-plan").style.backgroundColor = "";
      document.getElementById("third-plan").style.backgroundColor = "";
      document.getElementById("first-plan").style.border = "";
      document.getElementById("second-plan").style.border = "";
      document.getElementById("third-plan").style.border = "";
      // Add-ons
      document.getElementById("online_price").innerHTML = "+$10/yr";
      document.getElementById("larger_price").innerHTML = "+$20/yr";
      document.getElementById("profile_price").innerHTML = "+$20/yr";
      // checkbox
      document.getElementById('first-option').style.color = "hsl(231, 11%, 63%)";
      document.getElementById('second-option').style.color = "hsl(213, 96%, 25%)";
      document.getElementById('first-option').style.fontWeight = "400";
      document.getElementById('second-option').style.fontWeight = "750";
      //finishing up 
      document.getElementById("service").style.backgroundColor = "";
      document.getElementById("service").style.border = "";
      document.getElementById("storage").style.backgroundColor = "";
      document.getElementById("storage").style.border = "";
      document.getElementById("profile").style.backgroundColor = "";
      document.getElementById("profile").style.border = "";
      document.getElementById("check1").checked = false;
      document.getElementById("check2").checked = false;
      document.getElementById("check3").checked = false;
      document.getElementById("summary-plan").innerHTML = "";
      document.getElementById("period").innerHTML = "";
      document.getElementById("summary-price").innerHTML = "";
      document.getElementById('First-selected-add-ons').innerHTML = "";
      document.getElementById('First-selected-add-ons-price').innerHTML = "";
      document.getElementById('Second-selected-add-ons').innerHTML = "";
      document.getElementById('Second-selected-add-ons-price').innerHTML = "";
      document.getElementById('Third-selected-add-ons').innerHTML = "";
      document.getElementById('Third-selected-add-ons-price').innerHTML = "";
      document.getElementById("total-time").innerHTML = "year";
      document.getElementById("total-cost-time").innerHTML = "/yr";
      document.getElementById('total-cost').innerHTML =  0;
      Total_cost.pop();
      Total_cost.pop();
      Total_cost.pop();
  document.getElementById('results-plan').value = "";
  document.getElementById('results-add-ons').value = "";
    } else {
      // plan
      document.getElementById("Arcade").innerHTML = " $9/mo";
      document.getElementById("Advanced").innerHTML = " $12/mo";
      document.getElementById("Pro").innerHTML = " $15/mo";
      document.getElementById("Arcade-month").innerHTML = "";
      document.getElementById("Advanced-month").innerHTML = "";
      document.getElementById("Pro-month").innerHTML = "";
      document.getElementById("first-plan").style.height = "160px";
      document.getElementById("second-plan").style.height = "160px";
      document.getElementById("third-plan").style.height = "160px";
      document.getElementById("second-plan").style.backgroundColor = "";
      document.getElementById("first-plan").style.backgroundColor = "";
      document.getElementById("third-plan").style.backgroundColor = "";
      document.getElementById("first-plan").style.border = "";
      document.getElementById("second-plan").style.border = "";
      document.getElementById("third-plan").style.border = "";
      // Add-ons
      document.getElementById("online_price").innerHTML = "+$1/mo";
      document.getElementById("larger_price").innerHTML = "+$2/mo";
      document.getElementById("profile_price").innerHTML = "+$2/mo";
      // checkbox
      document.getElementById('first-option').style.color = "hsl(213, 96%, 25%)";
      document.getElementById('second-option').style.color = "hsl(231, 11%, 63%)";
      document.getElementById('first-option').style.fontWeight = "750";
      document.getElementById('second-option').style.fontWeight = "400";
      //finishing up 
      document.getElementById("service").style.backgroundColor = "";
      document.getElementById("service").style.border = "";
      document.getElementById("storage").style.backgroundColor = "";
      document.getElementById("storage").style.border = "";
      document.getElementById("profile").style.backgroundColor = "";
      document.getElementById("profile").style.border = "";
      document.getElementById("check1").checked = false;
      document.getElementById("check2").checked = false;
      document.getElementById("check3").checked = false;
      document.getElementById("summary-plan").innerHTML = "";
      document.getElementById("period").innerHTML = "";
      document.getElementById("summary-price").innerHTML = "";
      document.getElementById('First-selected-add-ons').innerHTML = "";
      document.getElementById('First-selected-add-ons-price').innerHTML = "";
      document.getElementById('Second-selected-add-ons').innerHTML = "";
      document.getElementById('Second-selected-add-ons-price').innerHTML = "";
      document.getElementById('Third-selected-add-ons').innerHTML = "";
      document.getElementById('Third-selected-add-ons-price').innerHTML = "";
      document.getElementById("total-time").innerHTML = "month";
      document.getElementById("total-cost-time").innerHTML = "/mo";
      document.getElementById('total-cost').innerHTML =  0;
      Total_cost.pop();
      Total_cost.pop();
      Total_cost.pop();
      document.getElementById('results-plan').value = "";
      document.getElementById('results-add-ons').value = "";
    }
  });
});

function first_plan() {
  document.getElementById("second-plan").style.backgroundColor = "";
  document.getElementById("first-plan").style.backgroundColor =
    "hsl(217, 100%, 97%)";
  document.getElementById("third-plan").style.backgroundColor = "";

  document.getElementById("first-plan").style.border =
    "1px solid hsl(243, 100%, 62%)";
  document.getElementById("second-plan").style.border = "";
  document.getElementById("third-plan").style.border = "";

  document.getElementById("summary-plan").innerHTML = " Arcade";
  document.getElementById("period").innerHTML = "(Monthly) ";
  document.getElementById("summary-price").innerHTML = "$9/mo";
  // Total 
  var Arcade = 9;
  Total_cost[0] = Arcade;
  document.getElementById('results-plan').value = "plan selected";
  var checked_box = document.getElementById("check_switch").checked;
  if (checked_box) {
    document.getElementById("summary-plan").innerHTML = "Arcade";
    document.getElementById("period").innerHTML = "(Yearly) ";
    document.getElementById("summary-price").innerHTML = "$90/yr";
    // Total 
    var Arcade = 90;
    Total_cost[0] = Arcade;
  document.getElementById('results-plan').value = "plan selected";
  } else {
    document.getElementById("summary-plan").innerHTML = " Arcade";
    document.getElementById("period").innerHTML = "(Monthly) ";
    document.getElementById("summary-price").innerHTML = "$9/mo";
    // Total 
    var Arcade = 9;
    Total_cost[0] = Arcade;
  document.getElementById('results-plan').value = "plan selected";
  }
  return Arcade;
}

function second_plan() {
  document.getElementById("first-plan").style.backgroundColor = "";
  document.getElementById("second-plan").style.backgroundColor =
    "hsl(217, 100%, 97%)";
  document.getElementById("third-plan").style.backgroundColor = "";

  document.getElementById("first-plan").style.border = "";
  document.getElementById("second-plan").style.border =
    "1px solid hsl(243, 100%, 62%)";
  document.getElementById("third-plan").style.border = "";

  document.getElementById("summary-plan").innerHTML = " Advanced";
  document.getElementById("period").innerHTML = " (Monthly)";
  document.getElementById("summary-price").innerHTML = "$12/mo";
  // Total 
  var Advanced = 12;
  Total_cost[0] = Advanced;
  document.getElementById('results-plan').value = "plan selected";
  var checked_box = document.getElementById("check_switch").checked;
  if (checked_box) {
    document.getElementById("summary-plan").innerHTML = "Advanced";
    document.getElementById("period").innerHTML = "(Yearly) ";
    document.getElementById("summary-price").innerHTML = "$120/yr";
    // Total 
    var Advanced = 120;
  Total_cost[0] = Advanced;
  document.getElementById('results-plan').value = "plan selected";
  } else {
    document.getElementById("summary-plan").innerHTML = " Advanced";
    document.getElementById("period").innerHTML = " (Monthly)";
    document.getElementById("summary-price").innerHTML = "$12/mo";
    // Total 
    var Advanced = 12;
  Total_cost[0] = Advanced;
  document.getElementById('results-plan').value = "plan selected";
  }
  return Advanced;
}
function third_plan() {
  document.getElementById("first-plan").style.backgroundColor = "";
  document.getElementById("second-plan").style.backgroundColor = "";
  document.getElementById("third-plan").style.backgroundColor =
    "hsl(217, 100%, 97%)";

  document.getElementById("first-plan").style.border = "";
  document.getElementById("second-plan").style.border = "";
  document.getElementById("third-plan").style.border =
    "1px solid hsl(243, 100%, 62%)";

  document.getElementById("summary-plan").innerHTML = " Pro";
  document.getElementById("period").innerHTML = " (Monthly)";
  document.getElementById("summary-price").innerHTML = "$15/mo";
  // Total 
  var Pro = 15;
  Total_cost[0] = Pro;
  document.getElementById('results-plan').value = "plan selected";
  var checked_box = document.getElementById("check_switch").checked;
  if (checked_box) {
    document.getElementById("summary-plan").innerHTML = "Pro";
    document.getElementById("period").innerHTML = "(Yearly) ";
    document.getElementById("summary-price").innerHTML = "$150/yr";
    // Total 
    var Pro = 150;
  Total_cost[0] = Pro;
  document.getElementById('results-plan').value = "plan selected";
  } else {
    document.getElementById("summary-plan").innerHTML = " Pro";
    document.getElementById("period").innerHTML = " (Monthly)";
    document.getElementById("summary-price").innerHTML = "$15/mo";
    // Total 
    var Pro = 15;
  Total_cost[0] = Pro;
  document.getElementById('results-plan').value = "plan selected";
  }
  return Pro;
}