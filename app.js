// ==========================================
// 1. БАЗА ДАННЫХ УПРАЖНЕНИЙ (Максимально расширенная)
// ==========================================
const exercisesDB = [
    // ГРУДЬ
    { id: 1, name: "Отжимания от пола (классика)", muscle: "chest", equipment: "bodyweight", tags: ["Грудь", "Свой вес", "База"] },
    { id: 2, name: "Отжимания с широкой постановкой", muscle: "chest", equipment: "bodyweight", tags: ["Грудь", "Свой вес"] },
    { id: 3, name: "Жим штанги лежа", muscle: "chest", equipment: "gym", tags: ["Грудь", "Зал", "База"] },
    { id: 4, name: "Жим штанги под углом", muscle: "chest", equipment: "gym", tags: ["Грудь", "Зал", "Верх груди"] },
    { id: 5, name: "Сведение в кроссовере", muscle: "chest", equipment: "gym", tags: ["Грудь", "Зал", "Изоляция"] },
    { id: 6, name: "Жим гантелей лежа", muscle: "chest", equipment: "dumbbells", tags: ["Грудь", "Гантели", "База"] },
    { id: 7, name: "Разводка гантелей", muscle: "chest", equipment: "dumbbells", tags: ["Грудь", "Гантели", "Изоляция"] },
    { id: 8, name: "Отжимания на брусьях (акцент на грудь)", muscle: "chest", equipment: "dips", tags: ["Грудь", "Брусья", "База"] },
    { id: 9, name: "Сведение рук с фитнес-резинкой", muscle: "chest", equipment: "bands", tags: ["Грудь", "Резинка", "Изоляция"] },
    { id: 10, name: "Отжимания с резинкой на спине", muscle: "chest", equipment: "bands", tags: ["Грудь", "Резинка", "С отягощением"] },

    // СПИНА
    { id: 11, name: "Подтягивания прямым хватом", muscle: "back", equipment: "pullup", tags: ["Спина", "Турник", "База"] },
    { id: 12, name: "Подтягивания обратным хватом", muscle: "back", equipment: "pullup", tags: ["Спина", "Турник", "Бицепс"] },
    { id: 13, name: "Австралийские подтягивания", muscle: "back", equipment: "pullup", tags: ["Спина", "Низкий турник"] },
    { id: 14, name: "Становая тяга", muscle: "back", equipment: "gym", tags: ["Спина", "Зал", "База"] },
    { id: 15, name: "Тяга верхнего блока", muscle: "back", equipment: "gym", tags: ["Спина", "Зал", "Ширина"] },
    { id: 16, name: "Тяга нижнего блока к поясу", muscle: "back", equipment: "gym", tags: ["Спина", "Зал", "Толщина"] },
    { id: 17, name: "Тяга Т-грифа", muscle: "back", equipment: "gym", tags: ["Спина", "Зал", "База"] },
    { id: 18, name: "Пуловер в кроссовере", muscle: "back", equipment: "gym", tags: ["Спина", "Зал", "Широчайшие"] },
    { id: 19, name: "Тяга гантели в наклоне", muscle: "back", equipment: "dumbbells", tags: ["Спина", "Гантели", "База"] },
    { id: 20, name: "Тяга двух гантелей в наклоне", muscle: "back", equipment: "dumbbells", tags: ["Спина", "Гантели"] },
    { id: 21, name: "Тяга фитнес-резинки к поясу сидя", muscle: "back", equipment: "bands", tags: ["Спина", "Резинка"] },
    { id: 22, name: "Тяга гири в наклоне", muscle: "back", equipment: "kettlebells", tags: ["Спина", "Гиря", "База"] },

    // НОГИ
    { id: 23, name: "Приседания без веса", muscle: "legs", equipment: "bodyweight", tags: ["Ноги", "Свой вес", "База"] },
    { id: 24, name: "Болгарские сплит-приседания", muscle: "legs", equipment: "bodyweight", tags: ["Ноги", "Свой вес", "Ягодицы"] },
    { id: 25, name: "Приседания со штангой", muscle: "legs", equipment: "gym", tags: ["Ноги", "Зал", "База"] },
    { id: 26, name: "Жим ногами в тренажере", muscle: "legs", equipment: "gym", tags: ["Ноги", "Зал"] },
    { id: 27, name: "Сгибание ног в тренажере", muscle: "legs", equipment: "gym", tags: ["Ноги", "Зал", "Бицепс бедра"] },
    { id: 28, name: "Выпады с гантелями", muscle: "legs", equipment: "dumbbells", tags: ["Ноги", "Гантели"] },
    { id: 29, name: "Кубковые приседания (с 1 гантелей)", muscle: "legs", equipment: "dumbbells", tags: ["Ноги", "Гантели", "База"] },
    { id: 30, name: "Приседания с фитнес-резинкой", muscle: "legs", equipment: "bands", tags: ["Ноги", "Резинка"] },
    { id: 31, name: "Махи гирей двумя руками (Свинг)", muscle: "legs", equipment: "kettlebells", tags: ["Ноги", "Гиря", "Взрывная сила"] },
    { id: 32, name: "Кубковые приседания с гирей", muscle: "legs", equipment: "kettlebells", tags: ["Ноги", "Гиря", "База"] },

    // РУКИ
    { id: 33, name: "Обратные отжимания от скамьи", muscle: "arms", equipment: "bodyweight", tags: ["Трицепс", "Свой вес"] },
    { id: 34, name: "Алмазные отжимания", muscle: "arms", equipment: "bodyweight", tags: ["Трицепс", "Свой вес", "База"] },
    { id: 35, name: "Отжимания на брусьях (акцент трицепс)", muscle: "arms", equipment: "dips", tags: ["Трицепс", "Брусья", "База"] },
    { id: 36, name: "Сгибание рук со штангой", muscle: "arms", equipment: "gym", tags: ["Бицепс", "Зал", "База"] },
    { id: 37, name: "Разгибание на трицепс в блоке", muscle: "arms", equipment: "gym", tags: ["Трицепс", "Зал", "Изоляция"] },
    { id: 38, name: "Сгибание рук с гантелями стоя", muscle: "arms", equipment: "dumbbells", tags: ["Бицепс", "Гантели"] },
    { id: 39, name: "Молотки (с гантелями)", muscle: "arms", equipment: "dumbbells", tags: ["Бицепс", "Гантели", "Брахиалис"] },
    { id: 40, name: "Французский жим с гантелей", muscle: "arms", equipment: "dumbbells", tags: ["Трицепс", "Гантели"] },
    { id: 41, name: "Сгибание рук с резинкой", muscle: "arms", equipment: "bands", tags: ["Бицепс", "Резинка"] },

    // ПЛЕЧИ
    { id: 42, name: "Армейский жим стоя", muscle: "shoulders", equipment: "gym", tags: ["Плечи", "Зал", "База"] },
    { id: 43, name: "Махи гантелями в стороны", muscle: "shoulders", equipment: "dumbbells", tags: ["Плечи", "Гантели", "Средняя дельта"] },
    { id: 44, name: "Отжимания в стойке на руках", muscle: "shoulders", equipment: "bodyweight", tags: ["Плечи", "Свой вес", "База"] },
    { id: 45, name: "Жим Арнольда", muscle: "shoulders", equipment: "dumbbells", tags: ["Плечи", "Гантели"] },
    { id: 46, name: "Махи руками с резинкой", muscle: "shoulders", equipment: "bands", tags: ["Плечи", "Резинка", "Изоляция"] },
    { id: 47, name: "Жим гири одной рукой стоя", muscle: "shoulders", equipment: "kettlebells", tags: ["Плечи", "Гиря", "База"] },

    // ПРЕСС
    { id: 48, name: "Скручивания на полу", muscle: "abs", equipment: "bodyweight", tags: ["Пресс", "Свой вес"] },
    { id: 49, name: "Планка классическая", muscle: "abs", equipment: "bodyweight", tags: ["Пресс", "Свой вес", "Статика"] },
    { id: 50, name: "Подъем ног в висе на турнике", muscle: "abs", equipment: "pullup", tags: ["Пресс", "Турник", "Низ живота"] },
    { id: 51, name: "Уголок на брусьях", muscle: "abs", equipment: "dips", tags: ["Пресс", "Брусья", "Статика"] },
    { id: 52, name: "Молитва на блоке", muscle: "abs", equipment: "gym", tags: ["Пресс", "Зал", "С отягощением"] },
    { id: 53, name: "Скручивания на римском стуле", muscle: "abs", equipment: "gym", tags: ["Пресс", "Зал", "Скамья"] },
    { id: 54, name: "Скручивания с фитнес-резинкой", muscle: "abs", equipment: "bands", tags: ["Пресс", "Резинка", "С сопротивлением"] }
];
// ==========================================
// 2. ПОДКЛЮЧЕНИЕ К DOM-ЭЛЕМЕНТАМ
// ==========================================
const metricsForm = document.getElementById('metrics-form');
const caloriesValue = document.getElementById('calories-value');
const exercisesGrid = document.getElementById('exercises-grid');
const adviceBox = document.getElementById('advice-box');

const uiMacros = {
    protein: { bar: document.getElementById('protein-bar'), text: document.getElementById('protein-value') },
    fat: { bar: document.getElementById('fat-bar'), text: document.getElementById('fat-value') },
    carbs: { bar: document.getElementById('carbs-bar'), text: document.getElementById('carbs-value') }
};

// ==========================================
// 3. ВОССТАНОВЛЕНИЕ ДАННЫХ ИЗ ПАМЯТИ
// ==========================================
window.addEventListener('DOMContentLoaded', function() {
    const savedData = localStorage.getItem('userMetrics');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        if(parsedData.gender) document.getElementById('gender').value = parsedData.gender;
        if(parsedData.age) document.getElementById('age').value = parsedData.age;
        if(parsedData.weight) document.getElementById('weight').value = parsedData.weight;
        if(parsedData.targetWeight) document.getElementById('target-weight').value = parsedData.targetWeight;
        if(parsedData.targetDays) document.getElementById('target-days').value = parsedData.targetDays;
        if(parsedData.height) document.getElementById('height').value = parsedData.height;
        if(parsedData.activity) document.getElementById('activity').value = parsedData.activity;
        
        if(parsedData.equipment && Array.isArray(parsedData.equipment)) {
            document.querySelectorAll('.eq-checkbox').forEach(function(cb) {
                cb.checked = parsedData.equipment.includes(cb.value);
            });
        }

        // Восстанавливаем галочки для мышц
        if(parsedData.muscleGroup && Array.isArray(parsedData.muscleGroup)) {
            document.querySelectorAll('.mg-checkbox').forEach(function(cb) {
                cb.checked = parsedData.muscleGroup.includes(cb.value);
            });
        }
    }
});

// ==========================================
// 4. ОБРАБОТКА НАЖАТИЯ НА КНОПКУ
// ==========================================
metricsForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedEquipment = [];
    document.querySelectorAll('.eq-checkbox').forEach(function(cb) {
        if (cb.checked) selectedEquipment.push(cb.value);
    });

    // Собираем выбранные мышцы
    const selectedMuscles = [];
    document.querySelectorAll('.mg-checkbox').forEach(function(cb) {
        if (cb.checked) selectedMuscles.push(cb.value);
    });

    const userData = {
        gender: document.getElementById('gender').value,
        age: Number(document.getElementById('age').value),
        weight: Number(document.getElementById('weight').value),
        targetWeight: Number(document.getElementById('target-weight').value),
        targetDays: Number(document.getElementById('target-days').value),
        height: Number(document.getElementById('height').value),
        activity: Number(document.getElementById('activity').value),
        equipment: selectedEquipment,
        muscleGroup: selectedMuscles // Сохраняем массив мышц
    };

    const filterData = {
        goal: document.getElementById('goal').value,
        muscleGroup: selectedMuscles,
        equipment: selectedEquipment
    };

    // --- ЛОГИЧЕСКАЯ ЗАЩИТА ---
    if (filterData.goal === 'gain' && userData.targetWeight < userData.weight) {
        adviceBox.style.display = 'block';
        adviceBox.style.borderLeftColor = '#ff5252';
        adviceBox.innerHTML = '<strong style="color: #ff5252;">⚠️ Ошибка логики!</strong> Вы выбрали "Набор массы", но желаемый вес меньше текущего.';
        return;
    }

    if (filterData.goal === 'loss' && userData.targetWeight > userData.weight) {
        adviceBox.style.display = 'block';
        adviceBox.style.borderLeftColor = '#ff5252';
        adviceBox.innerHTML = '<strong style="color: #ff5252;">⚠️ Ошибка логики!</strong> Вы выбрали "Сброс веса", но желаемый вес больше текущего.';
        return;
    }

    if (userData.targetWeight !== userData.weight && userData.targetDays < 14) {
        adviceBox.style.display = 'block';
        adviceBox.style.borderLeftColor = '#ff5252';
        adviceBox.innerHTML = '<strong style="color: #ff5252;">⚠️ Слишком быстро!</strong> Изменить вес менее чем за 14 дней невозможно без вреда для здоровья. Увеличьте срок.';
        return;
    }

    if (selectedEquipment.length === 0) {
        adviceBox.style.display = 'block';
        adviceBox.style.borderLeftColor = '#ffa726';
        adviceBox.innerHTML = '<strong style="color: #ffa726;">⚠️ Инвентарь не выбран!</strong> Пожалуйста, поставьте хотя бы одну галочку в разделе доступного инвентаря.';
        return;
    }

    if (selectedMuscles.length === 0) {
        adviceBox.style.display = 'block';
        adviceBox.style.borderLeftColor = '#ffa726';
        adviceBox.innerHTML = '<strong style="color: #ffa726;">⚠️ Мышцы не выбраны!</strong> Пожалуйста, отметьте галочкой группы мышц, которые хотите тренировать.';
        return;
    }

    adviceBox.style.borderLeftColor = '#00e676';
    // -------------------------

    localStorage.setItem('userMetrics', JSON.stringify(userData));

    calculateMetabolism(userData, filterData.goal);
    renderExercises(filterData);
});
// ==========================================
// 5. РАСЧЕТЫ КАЛОРИЙ, БЖУ И СОВЕТЫ
// ==========================================
function calculateMetabolism(user, goal) {
    let bmr = (10 * user.weight) + (6.25 * user.height) - (5 * user.age);
    bmr += (user.gender === 'male') ? 5 : -161;

    let tdee = bmr * user.activity;

    if (goal === 'loss') tdee *= 0.85; 
    if (goal === 'gain') tdee *= 1.15; 

    const totalCalories = Math.round(tdee);

    const proteinGrams = Math.round(user.weight * 2);
    const fatGrams = Math.round(user.weight * 1);
    const caloriesFromProteinFat = (proteinGrams * 4) + (fatGrams * 9);
    const carbsGrams = Math.round((totalCalories - caloriesFromProteinFat) / 4);

    if (adviceBox) {
        adviceBox.style.display = 'block';

        let recommendedDumbbell = Math.round(user.weight * (user.gender === 'male' ? 0.12 : 0.07));
        let recommendedBarbell = Math.round(user.weight * (user.gender === 'male' ? 0.4 : 0.25));
        
        if (recommendedDumbbell < 2) recommendedDumbbell = 2;
        if (recommendedBarbell < 15) recommendedBarbell = 15;

        let weightAdvice = '';
        
        // Умный анализ: скрипт понимает наличие зала, гантелей или гирь
        if (user.equipment.includes('gym')) {
            weightAdvice = '<br><br><strong>Подбор инвентаря:</strong> Раз у вас есть доступ в зал, делайте упор на базу. Стартовый вес штанги — ' + recommendedBarbell + ' кг. Цель на конец цикла — подойти к рабочему весу в ' + user.weight + ' кг.';
        } else if (user.equipment.includes('dumbbells') || user.equipment.includes('kettlebells')) {
            weightAdvice = '<br><br><strong>Подбор инвентаря:</strong> У вас есть свободные веса (гантели/гири). Начните с веса около ' + recommendedDumbbell + ' кг на руку. Прогрессируйте до ' + Math.round(recommendedDumbbell * 1.5) + ' кг к концу срока.';
        }

        if (user.targetWeight > user.weight) {
            const diff = user.targetWeight - user.weight;
            const weeks = user.targetDays / 7;
            const kgPerWeek = (diff / weeks).toFixed(2);
            
            let speedWarning = '';
            if (kgPerWeek > 0.5) speedWarning = ' <span style="color: #ffa726;">(Внимание: ' + kgPerWeek + ' кг/нед — очень высокая скорость, есть риск набрать лишний жир)</span>.';

            adviceBox.innerHTML = '<strong>Анализ: Набор мышечной массы</strong><br>' +
                'Цель — набрать ' + diff + ' кг за ' + user.targetDays + ' дней. ' +
                'Вам нужно прибавлять по <b>' + kgPerWeek + ' кг в неделю</b>' + speedWarning + 
                '<br>Соблюдайте профицит калорий и прогрессию весов.' + weightAdvice;

        } else if (user.targetWeight < user.weight) {
            const diff = user.weight - user.targetWeight;
            const weeks = user.targetDays / 7;
            const kgPerWeek = (diff / weeks).toFixed(2);
            
            let speedWarning = '';
            if (kgPerWeek > 1.0) speedWarning = ' <span style="color: #ff5252;">(Опасно: сброс ' + kgPerWeek + ' кг/нед приведет к потере мышц! Сбавьте темп)</span>.';

            adviceBox.innerHTML = '<strong>Анализ: Сушка и рельеф</strong><br>' +
                'Предстоит сбросить ' + diff + ' кг за ' + user.targetDays + ' дней. ' +
                'Темп снижения веса: <b>' + kgPerWeek + ' кг в неделю</b>' + speedWarning + 
                '<br>Строго соблюдайте норму белка (' + proteinGrams + ' г).' + weightAdvice;

        } else {
            adviceBox.innerHTML = '<strong>Анализ: Рекомпозиция тела</strong><br>' +
                'Отличный период для замены жировой ткани на мышечную при текущем весе.' + weightAdvice;
        }
    }

    caloriesValue.textContent = totalCalories;
    uiMacros.protein.text.textContent = proteinGrams;
    uiMacros.fat.text.textContent = fatGrams;
    uiMacros.carbs.text.textContent = carbsGrams;

    const maxProtein = 250; 
    const maxFat = 120;
    const maxCarbs = 500;

    uiMacros.protein.bar.style.width = '0%';
    uiMacros.fat.bar.style.width = '0%';
    uiMacros.carbs.bar.style.width = '0%';

    setTimeout(function() {
        uiMacros.protein.bar.style.width = Math.min((proteinGrams / maxProtein) * 100, 100) + '%';
        uiMacros.fat.bar.style.width = Math.min((fatGrams / maxFat) * 100, 100) + '%';
        uiMacros.carbs.bar.style.width = Math.min((carbsGrams / maxCarbs) * 100, 100) + '%';
    }, 50); 
}

// ==========================================
// 6. ФИЛЬТРАЦИЯ И ОТРИСОВКА КАРТОЧЕК
// ==========================================
function renderExercises(filters) {
    const filteredExercises = exercisesDB.filter(function(exercise) {
        // Теперь проверяем, входит ли мышца из базы в выбранный массив мышц
        const matchMuscle = filters.muscleGroup.includes(exercise.muscle);
        // И входит ли инвентарь из базы в выбранный массив инвентаря
        const matchEquipment = filters.equipment.includes(exercise.equipment);
        
        return matchMuscle && matchEquipment;
    });

    exercisesGrid.innerHTML = '';

    if (filteredExercises.length === 0) {
        exercisesGrid.innerHTML = '<p class="placeholder-text">Упражнений по вашему запросу не найдено. Попробуйте выбрать больше инвентаря или изменить группы мышц.</p>';
        return;
    }

    filteredExercises.forEach(function(exercise) {
        let tagsHTML = '';
        exercise.tags.forEach(function(tag) {
            tagsHTML += '<span class="exercise-tag">' + tag + '</span>';
        });
        
        const cardHTML = 
            '<div class="exercise-card">' +
                '<h4>' + exercise.name + '</h4>' +
                '<div class="tags-container">' +
                    tagsHTML +
                '</div>' +
            '</div>';
        
        exercisesGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}