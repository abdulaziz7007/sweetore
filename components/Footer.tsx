"use client";

import Link from "next/link";
import { Instagram, Facebook, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-cocoa py-14 text-white">
            <div className="container-x grid gap-10 md:grid-cols-4">

                {/* Logo va ijtimoiy tarmoqlar */}
                <div className="md:col-span-2">
                    <Link href="/" className="font-serif text-3xl font-bold">
                        Sweetora<span className="text-rose">.</span>
                    </Link>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                        {t("philosophyText")}
                    </p>
                    <div className="mt-6 flex gap-2">
                        <a href="https://instagram.com/abo.coder" aria-label="Instagram" className="rounded-full bg-white/10 p-3">
                            <Instagram size={17} />
                        </a>
                        <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-3">
                            <Facebook size={17} />
                        </a>
                        <a href="https://t.me/abo_coder" aria-label="Telegram" className="rounded-full bg-white/10 p-3">
                            <Send size={17} />
                        </a>
                    </div>
                </div>

                {/* Sahifalar havolalari */}
                <div>
                    <h3 className="font-semibold">{t("exploreCollection")}</h3>
                    <div className="mt-4 space-y-3 text-sm text-white/55">
                        <Link className="block hover:text-white" href="/products">
                            {t("shop")}
                        </Link>
                        <Link className="block hover:text-white" href="/favorites">
                            {t("favorites")}
                        </Link>
                        <Link className="block hover:text-white" href="/about">
                            {t("about")}
                        </Link>
                        <Link className="block hover:text-white" href="/contact">
                            {t("contact")}
                        </Link>
                    </div>
                </div>

                {/* Aloqa ma'lumotlari */}
                <div>
                    <h3 className="font-semibold">{t("contact")}</h3>
                    <div className="mt-4 space-y-3 text-sm text-white/55">
                        <p>{t("freshDelivery")}</p>
                        <p>{t("giftPackaging")}</p>
                        <p> hello@sweetora.uz</p>

                        <p>     <a href="tel:+998932135544">+998 93 213 55 44  </a></p>

                    </div>
                </div>

            </div>

            {/* Pastki mualliflik huquqi qismi */}
            <div className="container-x mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
                © 2026 Sweetora. {t("philosophy")}
            </div>
        </footer>
    );
}