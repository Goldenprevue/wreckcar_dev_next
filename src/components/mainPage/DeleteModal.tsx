import Image from "next/image"
import ReactModal from "react-modal"
import styles from "./main.module.css"
import b_close from "assets/b_close.png"
import { deleteUTM } from "util/async/api"
import { useRouter } from "next/navigation"
type OutputModalType = {
  isOpen: boolean
  onRequestClose: any
  style: any
  data: any
}
export const DeleteModal: React.FC<OutputModalType> = ({
  isOpen,
  onRequestClose,
  style,
  data,
}) => {
  const router = useRouter()
  const onClickDelHandler = () => {
    // const idList = [];
    // data.map((datas)=> idList.push(datas.id));
    deleteUTM({ data })
    onRequestClose()
    router.replace("/main")
  }
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <div
        className={styles.del_dialogBox}
        {...(isOpen && true ? { open: true } : {})}
        id="favDialog"
      >
        <div className={styles.header}>
          <div className={styles.title_box}>
            <span className={styles.title}>UTM 삭제하기</span>
          </div>
          <div className={styles.cancleBtn_box}>
            <button className={styles.cancleBtn} onClick={onRequestClose}>
              <Image src={b_close} alt="close_img" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.col_box}>
            <p>{data.length}개의 UTM이 선택되었습니다.</p>
            <p>삭제된 UTM은 복구할 수 없습니다.</p>
            <p>정말 삭제하시겠습니까?</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <button
            onClick={onRequestClose}
            className={styles.modal_del_button}
            value="default"
          >
            취소하기
          </button>
          <button
            onClick={onClickDelHandler}
            className={styles.modal_button}
            value="default"
          >
            삭제하기
          </button>
        </div>
      </div>
    </ReactModal>
  )
}
