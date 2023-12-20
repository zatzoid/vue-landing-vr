export default function (event, el) {
    const element =el ;
    // Получаем координаты центра элемента
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Вычисляем разницу между координатами курсора и центра элемента
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const radians = Math.atan2(deltaY, deltaX)
    const degrees = radians * (180 / Math.PI);
    const cursorPos = Math.ceil((degrees + 360) % 360);
return cursorPos
}