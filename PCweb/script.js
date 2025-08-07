const pcs = [
  {
    title: "RTX 4090 Beast",
    price: "$3,499 CAD",
    gpu: "RTX 4090",
    cpu: "Intel i9-14900KF",
    psu: "1000W Gold",
    ram: "64GB DDR5",
    storage: "2TB NVMe",
    frontImg: "images/pc1-front.jpg",
    sideImg: "images/pc1-side.jpg",
    sold: false
  },
  {
    title: "Mid-Range 4070 Build",
    price: "$1,899 CAD",
    gpu: "RTX 4070",
    cpu: "Intel i7-13700F",
    psu: "750W Bronze",
    ram: "32GB DDR5",
    storage: "1TB NVMe",
    frontImg: "images/pc2-front.jpg",
    sideImg: "images/pc2-side.jpg",
    sold: true
  }
];

function createCard(pc) {
  const card = document.createElement("div");
  card.className = "pc-card";
  card.innerHTML = `
    <div class="pc-image">
      <img src="\${pc.frontImg}" alt="Front" class="default-img" />
      <img src="\${pc.sideImg}" alt="Side" class="hover-img" />
    </div>
    <h2 class="pc-title">\${pc.title}</h2>
    <p class="pc-price">\${pc.price}</p>
    <p class="pc-spec"><strong>GPU:</strong> \${pc.gpu}</p>
    <p class="pc-spec"><strong>CPU:</strong> \${pc.cpu}</p>
    <ul class="pc-extra">
      <li>PSU: \${pc.psu}</li>
      <li>RAM: \${pc.ram}</li>
      <li>Storage: \${pc.storage}</li>
    </ul>
  `;
  return card;
}

const available = document.getElementById("available-pcs");
const sold = document.getElementById("sold-pcs");

pcs.forEach(pc => {
  const card = createCard(pc);
  if (pc.sold) {
    sold.appendChild(card);
  } else {
    available.appendChild(card);
  }
});
