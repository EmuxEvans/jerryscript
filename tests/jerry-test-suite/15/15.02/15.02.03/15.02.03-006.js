// Copyright 2014 Samsung Electronics Co., Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var object1 = {
  field1: 5,
  field2: "qwe",
  field3: true
}

var object2 = {
  field1: 5,
  field2: "qwe",
  field3: true
}

Object.freeze(object1);

assert(!Object.isExtensible(object1) && Object.isExtensible(object2));
