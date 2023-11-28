import { cn } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one class', () => {
        expect(cn('someClass')).toBe('someClass');
    });

    test('with additional  class', () => {
        const expected = 'someClass class1 class2';
        expect(cn('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mad and additional  class', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            cn('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('with mod false', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            cn('someClass', { hovered: false, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('with mod undefined', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            cn('someClass', { hovered: undefined, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
