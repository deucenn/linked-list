import LinkedList from "./LinkedList.js";

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("should initialize an empty list", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size()).toBe(0);
  });

  test("should prepend a node to the list", () => {
    list.prepend(10);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.size()).toBe(1);

    list.prepend(20);
    expect(list.head.value).toBe(20);
    expect(list.tail.value).toBe(10);
    expect(list.size()).toBe(2);
  });

  test("should append a node to the list", () => {
    list.append(10);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.size()).toBe(1);

    list.append(20);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(20);
    expect(list.size()).toBe(2);
  });

  test("should return the correct size of the list", () => {
    expect(list.size()).toBe(0);
    list.append(10);
    expect(list.size()).toBe(1);
    list.append(20);
    expect(list.size()).toBe(2);
  });

  test("should get the head node", () => {
    list.append(10);
    expect(list.getHead().value).toBe(10);
  });

  test("should get the tail node", () => {
    list.append(10);
    expect(list.getTail().value).toBe(10);
    list.append(20);
    expect(list.getTail().value).toBe(20);
  });

  test("should return the node at a specific index", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.at(0).value).toBe(10);
    expect(list.at(1).value).toBe(20);
    expect(list.at(2).value).toBe(30);
    expect(list.at(3)).toBe("There is no item for this index.");
  });

  test("should remove the last node with pop", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.pop();
    expect(list.size()).toBe(2);
    expect(list.tail.value).toBe(20);
  });

  test("should check if list contains a value", () => {
    list.append(10);
    list.append(20);
    expect(list.contains(10)).toBe(true);
    expect(list.contains(30)).toBe(false);
  });

  test("should find the index of a value", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.find(20)).toBe(1);
    expect(list.find(40)).toBeNull();
  });

  test("should return a string representation of the list", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.toString()).toBe("(10) -> (20) -> (30) -> null");
  });

  test("should insert a node at a given index", () => {
    list.append(10);
    list.append(30);
    list.insertAt(1, 20);
    expect(list.at(1).value).toBe(20);
    expect(list.size()).toBe(3);

    list.insertAt(0, 5);
    expect(list.getHead().value).toBe(5);
  });

  test("should remove a node at a given index", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.removeAt(1);
    expect(list.at(1).value).toBe(30);
    expect(list.size()).toBe(2);

    // Removing head node
    list.removeAt(0);
    expect(list.getHead().value).toBe(30);
  });

  test("should throw an error for invalid index in insertAt", () => {
    expect(() => list.insertAt(-1, 10)).toThrow("Invalid index");
  });

  test("should throw an error for invalid index in removeAt", () => {
    expect(() => list.removeAt(10)).toThrow("Invalid index");
  });
});
