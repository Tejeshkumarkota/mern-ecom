import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Edit, Trash2 } from "react-feather";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { getPhysicalProducts } from '../../../constants/axios/apis';
import { Link } from 'react-router-dom';

const Product_list = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getPhysicalProducts().then(response => {
			if (response) {
				setProducts(response.slice(0, 8))
			} else {
				setProducts([])
			}
		})
	}, [])

	return (
		<Fragment>
			<Breadcrumb title="Product List" parent="Physical" />
			<Container fluid={true}>
				<Row className="products-admin ratio_asos">
					{products?.map((product) => {
						return (
							<Col xl="3" sm="6" key={product.id}>
								<Card>
									<div className="products-admin">
										<CardBody className="product-box">
											<div className="img-wrapper">
												<div className="lable-block">
													{product.tag === "new" ? (
														<span className="lable3">{product.tag}</span>
													) : (
														""
													)}
													{product.discount === "on sale" ? (
														<span className="lable4">{product.discount}</span>
													) : (
														""
													)}
												</div>
												<div className="front">
													<a href="/#" className="bg-size">
														<img
															alt=""
															className="img-fluid blur-up bg-img lazyloaded"
															src={product?.images[0].src}
														/>
													</a>
													<div className="product-hover">
														<ul>
															<li>
																<Button color="btn" type="button">
																	<Edit className="editBtn" />
																</Button>
															</li>
															<li>
																<Button color="btn" type="button">
																	<Trash2 className="deleteBtn" />
																</Button>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="product-detail">
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<Link
													to={'/products/physical/product-detail'}
													state={{ product }}
													className="bg-size">
													{" "}
													<h6>{product.title}</h6>
												</Link>
												<h4>
													{product.price} <del>{product.discount}</del>
												</h4>
												<ul className="color-variant">
													{product.variants?.map((variant) => {
														return (
															<li className={`bg-${variant.color}`} key={variant.variant_id}></li>
														)
													})}
												</ul>
											</div>
										</CardBody>
									</div>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</Fragment>
	);
};

export default Product_list;
