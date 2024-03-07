import { MercadoPagoConfig, Preference } from "mercadopago";

const mp = new MercadoPagoConfig({ accessToken: process.env.MP_TOKEN });

export const donations = async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: +req.body.quantity,
          currency_id: "ARS",
          unit_price: +req.body.unit_price,
          items: +req.body.items,
        },
      ],
      back_urls: {
        success: "http://localhost3001/home",
      },
      auto_return: "approved",
    };

    const preferences = new Preference(mp);

    const response = await preferences.create({ body: body });

    console.log(response);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
    return;
  }
};
