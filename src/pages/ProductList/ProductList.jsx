import classes from './ProductList.module.css';
import {
  Container,
  Product,
  Title,
  IconComponent,
  Input,
  Label,
} from '@/components';

/* -------------------------------------------------------------------------- */

export default function ProductList() {
  const dataProps = { width: '18px', height: '18px' };

  return (
    <div className={classes.productList}>
      <Title>베스트</Title>
      <Container className={classes.container}>
        <ul className={classes.filter}>
          <li>
            필터
            <button type="button">초기화</button>
          </li>
          <li>
            <button type="button">
              카테고리
              <IconComponent
                data-image="Direction=Down"
                dataProps={dataProps}
              />
            </button>
          </li>
          <li className={classes.active}>
            <button type="button">
              브랜드
              <IconComponent
                data-image="Direction=Down"
                dataProps={dataProps}
              />
            </button>
            <ul className={classes.activeContents}>
              <li>
                <Input id="감자밭" type="checkbox" />
                <Label htmlFor="감자밭">감자밭</Label>
                <span className={classes.count}>1</span>
              </li>
              <li>
                <Input id="강남면옥" type="checkbox" />
                <Label htmlFor="강남면옥">감자밭</Label>
                <span className={classes.count}>1</span>
              </li>
            </ul>
          </li>
          <li>
            <button type="button">
              가격
              <IconComponent
                data-image="Direction=Down"
                dataProps={dataProps}
              />
            </button>
          </li>
          <li>
            <button type="button">
              혜택
              <IconComponent
                data-image="Direction=Down"
                dataProps={dataProps}
              />
            </button>
          </li>
          <li>
            <button type="button">
              유형
              <IconComponent
                data-image="Direction=Down"
                dataProps={dataProps}
              />
            </button>
          </li>
          <li>
            <button type="button">
              특정상품 제외
              <IconComponent
                data-image="Direction=Down"
                dataProps={dataProps}
              />
            </button>
          </li>
        </ul>
        <div className={classes.product}>
          <span>{`총 1건`}</span>
          <ul className={classes.orderby}>
            <li>
              <button type="button">추천순</button>
            </li>
            <li>
              <button type="button">신상품순</button>
            </li>
            <li>
              <button type="button">판매량순</button>
            </li>
            <li>
              <button type="button">혜택순</button>
            </li>
            <li>
              <button type="button">낮은 가격순</button>
            </li>
            <li>
              <button type="button">높은 가격순</button>
            </li>
          </ul>
          <Product />
        </div>
      </Container>
    </div>
  );
}