// Example 1

// try {
//     try {
//       throw new Error('oops');
//     } finally {
//       console.log('finally');
//     }
//   } catch (ex) {
//     console.error('outer', ex.message);
// }


// Ouput:
// finally
// outer oops

try {
    try {
      throw new Error('oops');
    } catch (err) {
      console.log('ddd');
    } finally {
      console.log('finally');
    }
  } catch (ex) {
    console.error('outer', ex.message);
  }
  

// Ouput:
// ddd
// finally


try {
    try {
      throw new Error('oops');
    } catch (ex) {
      console.error('inner', ex.message);
    } finally {
      console.log('finally');
    }
  } catch (ex) {
    console.error('outer', ex.message);
  }

// Ouput:
// inner oops
// finally





















