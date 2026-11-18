import { useEffect, useState } from 'react';
import { Input } from '@tarojs/components';

export default function PriceInput(props) {
  const [val, setVal] = useState(props.value == null ? '' : String(props.value));

  useEffect(function () {
    setVal(props.value == null ? '' : String(props.value));
  }, [props.value]);

  function commit() {
    if (props.onSave) props.onSave(val);
  }

  return (
    <Input
      className='price-box'
      type='digit'
      value={val}
      placeholder='未定价'
      placeholderStyle='color:#475569'
      maxlength={12}
      onInput={function (e) { setVal(e.detail.value); }}
      onBlur={commit}
      onConfirm={commit}
    />
  );
}
