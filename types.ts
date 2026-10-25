// Задача 1. Типы данных

// Только учебные дни: пн–пт
export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

export type LessonType = 'lecture' | 'practice' | 'lab';

export interface Teacher {
  id: number;
  name: string;
  subject: string;
}

export interface Lesson {
  id: number;
  title: string;
  type: LessonType;
  teacher: Teacher;
  dayOfWeek: DayOfWeek;
  startTime: string; // формат 'HH:MM'
  endTime: string;   // формат 'HH:MM'
  room?: string;     // опциональное поле
}

export interface Schedule {
  groupName: string;
  lessons: Lesson[];
}
