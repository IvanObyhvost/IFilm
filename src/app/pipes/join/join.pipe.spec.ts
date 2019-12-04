import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe;
  const mockValues = ['test', 'test1'];
  beforeEach(() => {
    pipe = new JoinPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('it should be "test, test1"', () => {
    expect(pipe.transform(mockValues, ', ')).toBe('test, test1');
  });
  it('it should be "test.test1"', () => {
    expect(pipe.transform(mockValues, '.')).toBe('test.test1');
  });
  it('should throw an error: It should be Array', () => {
    expect(() => pipe.transform('1000')).toThrowError('JoinPipe: Invalid values. It should be Array');
  });
  it('should throw an error: not a string', () => {
    expect(() => pipe.transform(mockValues, 1000)).toThrowError('JoinPipe: not a string');
  });
});
