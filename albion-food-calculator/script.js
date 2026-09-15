const NORMAL_OUTPUT = 10;
const EEL_OUTPUT = 1;
const FOCUS_MULTIPLIER = 0.565;

const recipes = {
  beefStew81: {
    name: "Beef Stew 8.1",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Beef", quantity: 1 },
      { name: "Potato", quantity: 8 },
      { name: "Wheat", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Basic Fish Sauce", quantity: 90 }
    ]
  },

  beefStew82: {
    name: "Beef Stew 8.2",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Beef", quantity: 1 },
      { name: "Potato", quantity: 8 },
      { name: "Wheat", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Fancy Fish Sauce", quantity: 90 }
    ]
  },

  beefStew83: {
    name: "Beef Stew 8.3",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Beef", quantity: 1 },
      { name: "Potato", quantity: 8 },
      { name: "Wheat", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Special Fish Sauce", quantity: 90 }
    ]
  },

  eelStew81: {
    name: "Deadwater Eel Stew 8.1",
    output: EEL_OUTPUT,
    ingredients: [
      { name: "Deadwater Eel", quantity: 1 },
      { name: "Pumpkin", quantity: 6 },
      { name: "Ghoul Yarrow", quantity: 6 },
      { name: "Cow's Milk", quantity: 6 },
      { name: "Basic Fish Sauce", quantity: 27 }
    ]
  },

  eelStew82: {
    name: "Deadwater Eel Stew 8.2",
    output: EEL_OUTPUT,
    ingredients: [
      { name: "Deadwater Eel", quantity: 1 },
      { name: "Pumpkin", quantity: 6 },
      { name: "Ghoul Yarrow", quantity: 6 },
      { name: "Cow's Milk", quantity: 6 },
      { name: "Fancy Fish Sauce", quantity: 27 }
    ]
  },

  eelStew83: {
    name: "Deadwater Eel Stew 8.3",
    output: EEL_OUTPUT,
    ingredients: [
      { name: "Deadwater Eel", quantity: 1 },
      { name: "Pumpkin", quantity: 6 },
      { name: "Ghoul Yarrow", quantity: 6 },
      { name: "Cow's Milk", quantity: 6 },
      { name: "Special Fish Sauce", quantity: 27 }
    ]
  },

  beefSandwich81: {
    name: "Beef Sandwich 8.1",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Beef", quantity: 1 },
      { name: "Bread", quantity: 8 },
      { name: "Cabbage", quantity: 8 },
      { name: "Basic Fish Sauce", quantity: 90 }
    ]
  },

  beefSandwich82: {
    name: "Beef Sandwich 8.2",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Beef", quantity: 1 },
      { name: "Bread", quantity: 8 },
      { name: "Cabbage", quantity: 8 },
      { name: "Fancy Fish Sauce", quantity: 90 }
    ]
  },

  beefSandwich83: {
    name: "Beef Sandwich 8.3",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Beef", quantity: 1 },
      { name: "Bread", quantity: 8 },
      { name: "Cabbage", quantity: 8 },
      { name: "Special Fish Sauce", quantity: 90 }
    ]
  },

  porkPie71: {
    name: "Pork Pie 7.1",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Flour", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Basic Fish Sauce", quantity: 90 }
    ]
  },

  porkPie72: {
    name: "Pork Pie 7.2",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Flour", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Fancy Fish Sauce", quantity: 90 }
    ]
  },

  porkPie73: {
    name: "Pork Pie 7.3",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Flour", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Special Fish Sauce", quantity: 90 }
    ]
  },

  porkOmelette71: {
    name: "Pork Omelette 7.1",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Egg", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Basic Fish Sauce", quantity: 90 }
    ]
  },

  porkOmelette72: {
    name: "Pork Omelette 7.2",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Egg", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Fancy Fish Sauce", quantity: 90 }
    ]
  },

  porkOmelette73: {
    name: "Pork Omelette 7.3",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Egg", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Special Fish Sauce", quantity: 90 }
    ]
  },

  avalonianPorkOmelette71: {
    name: "Avalonian Pork Omelette 7.1",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Egg", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Avalonian Energy", quantity: 1 },
      { name: "Basic Fish Sauce", quantity: 90 }
    ]
  },

  avalonianPorkOmelette72: {
    name: "Avalonian Pork Omelette 7.2",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Egg", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Avalonian Energy", quantity: 1 },
      { name: "Fancy Fish Sauce", quantity: 90 }
    ]
  },

  avalonianPorkOmelette73: {
    name: "Avalonian Pork Omelette 7.3",
    output: NORMAL_OUTPUT,
    ingredients: [
      { name: "Pork", quantity: 1 },
      { name: "Egg", quantity: 8 },
      { name: "Goat's Milk", quantity: 8 },
      { name: "Avalonian Energy", quantity: 1 },
      { name: "Special Fish Sauce", quantity: 90 }
    ]
  }
};

const prices = {};

const foodSelect = document.getElementById("foodSelect");
const ingredientInputs = document.getElementById("ingredientInputs");
const recipeInfo = document.getElementById("recipeInfo");
const ingredientSummary = document.getElementById("ingredientSummary");

const sellPriceInput = document.getElementById("sellPrice");
const focusEnabledInput = document.getElementById("focusEnabled");
const taxRateInput = document.getElementById("taxRate");
const craftCountInput = document.getElementById("craftCount");

const seaweedPriceInput = document.getElementById("seaweedPrice");
const choppedFishPriceInput = document.getElementById("choppedFishPrice");

function formatNumber(value) {
  return Math.round(value).toLocaleString("en-US");
}

function silver(value) {
  return `${formatNumber(value)} silver`;
}

function getSelectedRecipe() {
  return recipes[foodSelect.value];
}

function getPrice(name) {
  return Number(prices[name] || 0);
}

function setPrice(name, value) {
  prices[name] = Number(value) || 0;
}

function getSauceCosts() {
  const seaweed = Number(seaweedPriceInput.value) || 0;
  const choppedFish = Number(choppedFishPriceInput.value) || 0;

  return {
    "Basic Fish Sauce": seaweed + choppedFish * 15,
    "Fancy Fish Sauce": seaweed * 3 + choppedFish * 45,
    "Special Fish Sauce": seaweed * 9 + choppedFish * 135
  };
}

function renderFoodSelect() {
  foodSelect.innerHTML = "";

  Object.entries(recipes).forEach(([key, recipe]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = recipe.name;
    foodSelect.appendChild(option);
  });

  foodSelect.value = Object.keys(recipes)[0];
}

function renderRecipeInfo() {
  const recipe = getSelectedRecipe();

  recipeInfo.innerHTML = `
    <div><strong>Công thức:</strong> ${recipe.name}</div>
    <div><strong>Sản lượng:</strong> ${recipe.output} food mỗi lần craft</div>
    <div><strong>Nguyên liệu:</strong> ${
      recipe.ingredients
        .map(item => `${item.name} × ${item.quantity}`)
        .join(" + ")
    }</div>
  `;
}

function renderIngredientInputs() {
  const recipe = getSelectedRecipe();

  ingredientInputs.innerHTML = "";

  recipe.ingredients.forEach(item => {
    if (item.name.includes("Fish Sauce")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "price-item";

    const name = document.createElement("span");
    name.className = "ingredient-name";
    name.textContent = item.name;

    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.value = prices[item.name] || 0;
    input.dataset.ingredient = item.name;
    input.placeholder = "Giá mỗi cái";

    input.addEventListener("input", () => {
      setPrice(item.name, input.value);
      calculate();
    });

    wrapper.appendChild(name);
    wrapper.appendChild(input);
    ingredientInputs.appendChild(wrapper);
  });
}

function updateSaucePrices() {
  const sauceCosts = getSauceCosts();

  document.getElementById("basicSauceCost").textContent =
    silver(sauceCosts["Basic Fish Sauce"]);

  document.getElementById("fancySauceCost").textContent =
    silver(sauceCosts["Fancy Fish Sauce"]);

  document.getElementById("specialSauceCost").textContent =
    silver(sauceCosts["Special Fish Sauce"]);
}

function calculate() {
  const recipe = getSelectedRecipe();
  const sauceCosts = getSauceCosts();

  const craftCount = Math.max(1, Number(craftCountInput.value) || 1);
  const sellPrice = Number(sellPriceInput.value) || 0;
  const taxRate = Number(taxRateInput.value) || 0;

  const multiplier =
    focusEnabledInput.value === "yes" ? FOCUS_MULTIPLIER : 1;

  let costPerCraft = 0;
  let details = [];

  recipe.ingredients.forEach(item => {
    let unitPrice;

    if (item.name.includes("Fish Sauce")) {
      unitPrice = sauceCosts[item.name];
    } else {
      unitPrice = getPrice(item.name);
    }

    const originalCost = item.quantity * unitPrice;
    const effectiveCost = originalCost * multiplier;
    const totalCost = effectiveCost * craftCount;

    costPerCraft += effectiveCost;

    details.push({
      name: item.name,
      quantity: item.quantity * craftCount,
      unitPrice,
      totalCost
    });
  });

  const totalOutput = recipe.output * craftCount;
  const totalCost = costPerCraft * craftCount;
  const grossRevenue = sellPrice * totalOutput;
  const tax = grossRevenue * (taxRate / 100);
  const netRevenue = grossRevenue - tax;
  const profit = netRevenue - totalCost;
  const costPerFood = totalOutput > 0 ? totalCost / totalOutput : 0;
  const profitRate =
    totalCost > 0 ? (profit / totalCost) * 100 : 0;

  document.getElementById("totalCost").textContent = silver(totalCost);
  document.getElementById("costPerFood").textContent = silver(costPerFood);
  document.getElementById("revenue").textContent = silver(netRevenue);
  document.getElementById("profit").textContent = silver(profit);
  document.getElementById("profitRate").textContent =
    `${profitRate.toFixed(2)}%`;
  document.getElementById("outputCount").textContent =
    `${formatNumber(totalOutput)} food`;

  const profitElement = document.getElementById("profit");
  profitElement.classList.toggle("positive", profit >= 0);
  profitElement.classList.toggle("negative", profit < 0);

  ingredientSummary.innerHTML = details
    .map(item => `
      <div class="ingredient-row">
        <span>
          ${item.name} × ${formatNumber(item.quantity)}
        </span>
        <strong>${silver(item.totalCost)}</strong>
      </div>
    `)
    .join("");
}

function refresh() {
  renderRecipeInfo();
  renderIngredientInputs();
  updateSaucePrices();
  calculate();
}

foodSelect.addEventListener("change", refresh);

[
  sellPriceInput,
  focusEnabledInput,
  taxRateInput,
  craftCountInput,
  seaweedPriceInput,
  choppedFishPriceInput
].forEach(input => {
  input.addEventListener("input", calculate);
  input.addEventListener("change", () => {
    updateSaucePrices();
    calculate();
  });
});

renderFoodSelect();
refresh();