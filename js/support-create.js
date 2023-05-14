import { supportArr } from "./support-arr";

const supportItemsEl = document.querySelector(".support-list");
const makeSupporItems = (itemsEl) => {
  const { title, url, img } = itemsEl;
  return `<li class="support-item">
  <a class="support-link" href=${url}>
    <img
      class="support-image"
      src=${img}
      data-source=${img}
      alt=${title}
    />
  </a>
</li>`;
};
const itemsImages = supportArr.map(makeSupporItems).join("");
supportItemsEl.insertAdjacentHTML("beforeend", itemsImages);
