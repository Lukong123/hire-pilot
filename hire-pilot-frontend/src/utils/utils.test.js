import { getFooterCopy, getFullYear } from "./utils";

test('gets full year', () => {
    expect(getFullYear()).toBe(2023);
})