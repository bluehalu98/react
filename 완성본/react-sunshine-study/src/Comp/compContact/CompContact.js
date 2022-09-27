import React from 'react';
import CompContactInp from './CompContactInp';

const CompContact = () => {
  return (
    <>
      <h2 className='sub-title'>온라인 문의</h2>
      <p className='sub-summary'>
        <span>
          <em>궁금하신 사항이나 프로젝트 문의사항을 작성해 주세요.</em>
          <b>담당자가 확인후 빠른 회신을 약속합니다.</b>
        </span>
      </p>
      <section className='section-contact'>
        <form className='contact-form'>
          <fieldset className='input-field'>
            <CompContactInp/>
            <div>
              <label htmlFor="id5">설명</label>
              <textarea id="id5"></textarea>
            </div>
            <div>
              <label className='last-label' htmlFor="id6">첨부파일</label>
              <input id='id6' type="file"/>
            </div>
          </fieldset>
          <fieldset className="submit-field">
            <button type="submit">확인</button>
            <button type="reset">취소</button>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default CompContact;