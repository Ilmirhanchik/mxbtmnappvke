// База данных специальностей ВКЭ
const specData = {
    "is_prog": {
        title: "Информационные системы и программирование",
        desc: "<b>Квалификация:</b> Программист, разработчик веб и мультимедийных приложений.<br><b>Обучение:</b> Работа с базами данных, разработка программных модулей, тестирование ПО и проектирование интерфейсов."
    },
    "inf_sec": {
        title: "Обеспечение информационной безопасности",
        desc: "<b>Квалификация:</b> Специалист по защите информации.<br><b>Обучение:</b> Организация защиты компьютерных систем, предотвращение утечек данных и аудит безопасности сетей."
    },
    "set_sys": {
        title: "Инфокоммуникационные сети и системы связи",
        desc: "<b>Квалификация:</b> Специалист по инфокоммуникациям.<br><b>Обучение:</b> Монтаж и эксплуатация сетевого оборудования, настройка серверов и систем беспроводной связи."
    },
    "reklama": {
        title: "Реклама",
        desc: "<b>Квалификация:</b> Специалист по рекламе.<br><b>Обучение:</b> Создание рекламных продуктов, медиапланирование, маркетинг и работа с графическими пакетами."
    },
    "design_prom": {
        title: "Дизайн (по отраслям)",
        desc: "<b>Квалификация:</b> Дизайнер.<br><b>Обучение:</b> Проектирование художественных изделий, интерьеров и промышленный дизайн."
    },
    "graph_design": {
        title: "Графический дизайн",
        desc: "<b>Квалификация:</b> Графический дизайнер.<br><b>Обучение:</b> Брендинг, типографика, иллюстрация и разработка визуальных коммуникаций."
    },
    "op_is": {
        title: "Оператор информационных систем и ресурсов",
        desc: "<b>Профессия:</b> Оператор.<br><b>Обучение:</b> Обработка текстовой и цифровой информации, верстка документов и поддержка баз данных."
    }
};

const modal = document.getElementById("modal");
const subModal = document.getElementById("sub-modal");
const mDesc = document.getElementById("modal-description");
const subTitle = document.getElementById("sub-modal-title");
const subDesc = document.getElementById("sub-modal-description");

function openModal(title, description, link, image, type) {
    document.getElementById("modal-title").innerText = title;
    
    if (type === "list") {
        const keys = description.split(';');
        let listHtml = "";
        keys.forEach(key => {
            const k = key.trim();
            if (specData[k]) {
                listHtml += `<div class="spec-item" onclick="openSubModal('${k}')">${specData[k].title}</div>`;
            }
        });
        mDesc.innerHTML = listHtml;
    } else {
        mDesc.innerText = description;
    }

    // Ссылка и картинка
    const mLink = document.getElementById("modal-link");
    const mImg = document.getElementById("modal-img");
    mLink.style.display = link ? "block" : "none";
    if (link) mLink.href = link;
    mImg.style.display = image ? "block" : "none";
    if (image) mImg.src = image;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function openSubModal(key) {
    const data = specData[key];
    subTitle.innerText = data.title;
    subDesc.innerHTML = data.desc;
    subModal.style.display = "flex";
}

function closeSubModal() {
    subModal.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
    subModal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Слушатели событий
document.querySelectorAll('.redirect-button').forEach(btn => {
    btn.addEventListener('click', () => {
        openModal(
            btn.getAttribute('data-title'),
            btn.getAttribute('data-description'),
            btn.getAttribute('data-link'),
            btn.getAttribute('data-image'),
            btn.getAttribute('data-type')
        );
    });
});

document.getElementById("closeModalBtn").onclick = closeModal;
document.getElementById("closeSubModalBtn").onclick = closeSubModal;

window.onclick = (e) => {
    if (e.target === modal) closeModal();
    if (e.target === subModal) closeSubModal();
};