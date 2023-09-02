# LearnAngular

## RxJS
- RxJS is a library for composing asynchronous and event-based programs by using observable sequences. RxJS Overview
- Observable: chỉ là một function (class) mà nó có một số yêu cầu đặc biệt. Nó nhận đầu vào là một Function, mà Function này nhận đầu vào là một Observer và trả về một function để có thể thực hiện việc cancel quá trình xử lý. Thông thường (RxJS 5 trở lên) chúng ta đặt tên function đó là unsubscribe.
- Observer là một tập hợp các callbacks tương ứng cho việc lắng nghe các giá trị (next, error, hay complete) được gửi đến bởi Observable.
- Subscription là kết quả có được sau khi thực hiện một Observable, nó thường dùng cho việc hủy việc tiếp tục xử lý.
- Operators là các pure functions cho phép lập trình functional với Observable.
- Subject để thực hiện việc gửi dữ liệu đến nhiều Observers (multicasting).
- Một scheduler sẽ điều khiển khi nào một subscription bắt đầu thực thi, và khi nào sẽ gửi tín hiệu đi.


## RxJS Creation Operators
- of() là operator dùng để tạo 1 Observable từ bất cứ giá trị gì: primitives, Array, Object, Function v.v... of() sẽ nhận vào các giá trị và sẽ complete ngay sau khi tất cả các giá trị truyền vào được emit.
- from() cũng gần giống với of(), cũng được sử dụng để tạo Observable từ 1 giá trị. Tuy nhiên, điểm khác biệt đối với of() là from() chỉ nhận vào giá trị là một Iterable hoặc là một Promise.
- fromEvent() được dùng để chuyển đổi 1 sự kiện (Event) sang Observable. Ví dụ chúng ta có DOM Event như mouse click hoặc input.
- fromEventPattern() là 1 dạng nâng cao của fromEvent(). Nói về concept thì fromEventPattern() cũng giống với fromEvent() là tạo Observable từ sự kiện.
- interval() là hàm để tạo Observable mà sẽ emit giá trị số nguyên từ số 0 theo 1 chu kỳ nhất định. Hàm này giống với setInterval.
- throwError() sẽ dùng để tạo Observable mà thay vì emit giá trị, Observable này sẽ throw 1 error ngay lập tức sau khi subscribe.

## RxJS Transformation Operators
- map
- pluck
- mapTo
- scan
- reduce
- toArray
- buffer

## RxJS Filtering Operators
- filter
- first / last
- find
- single
- take
- takeLast
- takeUntil
- skip
- distinct
- debounce

## RxJS Combination Operators
- forkJoin
- combineLast
- zip
- concat
- merge

## RxJS Error Handling and Conditional Operators
- catchError


## RxJS Higher Order Observables and Utility Operators
- HOOs là những operators mà sẽ nhận vào giá trị của Outer Observable (hay còn gọi là Source) và sẽ trả về một Inner Observable (hay còn gọi là Destination) khác. Nhắc lại ngày trước 1 chút, chúng ta đã cùng tìm hiểu về map(), là Transformation Operator

## RxJS Subject and Multicasting
- 




