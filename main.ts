import type { Schedule, Teacher } from './types';
import {
  formatLesson,
  getLast,
  getLessonsByDay,
  getLessonsByType,
  getTeacherLessons,
} from './schedule';

const math: Teacher = { id: 1, name: 'Иванова А.П.', subject: 'Математика' };
const prog: Teacher = { id: 2, name: 'Петров С.И.', subject: 'Программирование' };

const schedule: Schedule = {
  groupName: 'ИСП-31',
  lessons: [
    { id: 1, title: 'Математика', type: 'lecture', teacher: math,
      dayOfWeek: 'monday', startTime: '09:00', endTime: '10:30', room: '301' },
    { id: 2, title: 'Программирование', type: 'lab', teacher: prog,
      dayOfWeek: 'monday', startTime: '10:45', endTime: '12:15', room: '215' },
    { id: 3, title: 'Математика', type: 'practice', teacher: math,
      dayOfWeek: 'wednesday', startTime: '09:00', endTime: '10:30' }, // без аудитории
    { id: 4, title: 'Программирование', type: 'lecture', teacher: prog,
      dayOfWeek: 'friday', startTime: '13:00', endTime: '14:30', room: '110' },
  ],
};

console.log('Понедельник:');
getLessonsByDay(schedule, 'monday').forEach((l) => console.log(' ', formatLesson(l)));

console.log('Лабораторные:');
getLessonsByType(schedule, 'lab').forEach((l) => console.log(' ', formatLesson(l)));

console.log('Занятия Ивановой:');
getTeacherLessons(schedule, 1).forEach((l) => console.log(' ', formatLesson(l)));

// getLast: наведите курсор на переменные, чтобы увидеть выведенный тип
const lastLesson = getLast(schedule.lessons); // Lesson | undefined
const lastTeacher = getLast([math, prog]);    // Teacher | undefined
const empty = getLast([]);                    // undefined

console.log('Последнее занятие:', lastLesson && formatLesson(lastLesson));
console.log('Последний преподаватель:', lastTeacher?.name);
console.log('Пустой массив:', empty);
