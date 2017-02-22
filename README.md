Forms a object composed of the path from the given object.

```
  it('2.1 to be ', function() {
    (pathify.toPath({b: {a: 1, c: 2}})).should.deepEqual({
      'b.a': 1,
      'b.c': 2
    });
  });

  it('2.2 to be ', function() {
    (pathify.toPath({b: {a: 1, c: 2}, d: {a: {j: [0, 1, 2]}}})).should.deepEqual({
      'b.a': 1,
      'b.c': 2,
      'd.a.j': [0, 1, 2]
    });
  });
```
