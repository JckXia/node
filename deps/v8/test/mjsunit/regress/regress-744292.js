// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --harmony-dynamic-import

__v_1 = {
};
function __f_8() {
  try {
    __f_8();
  } catch(e) {
      import(__v_1);
  }
}
__f_8();
