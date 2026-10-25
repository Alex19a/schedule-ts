import type { DayOfWeek, Lesson, LessonType, Schedule } from './types';

// Задача 2. Функции с типизацией

export function getLessonsByDay(schedule: Schedule, day: DayOfWeek): Lesson[] {
  return schedule.lessons.filter((lesson) => lesson.dayOfWeek === day);
}

export function getLessonsByType(schedule: Schedule, type: LessonType): Lesson[] {
  return schedule.lessons.filter((lesson) => lesson.type === type);
}

export function getTeacherLessons(schedule: Schedule, teacherId: number): Lesson[] {
  return schedule.lessons.filter((lesson) => lesson.teacher.id === teacherId);
}

// Record<LessonType, string> гарантирует, что переведены ВСЕ типы занятий
const lessonTypeLabels: Record<LessonType, string> = {
  lecture: 'лекция',
  practice: 'практика',
  lab: 'лабораторная',
};

// "09:00–10:30 | Математика (лекция) | ауд. 301"
export function formatLesson(lesson: Lesson): string {
  const time = `${lesson.startTime}–${lesson.endTime}`;
  const title = `${lesson.title} (${lessonTypeLabels[lesson.type]})`;
  const parts = [time, title];

  if (lesson.room !== undefined) {
    parts.push(`ауд. ${lesson.room}`);
  }

  return parts.join(' | ');
}

// Задача 3. Generic-функция
export function getLast<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}
